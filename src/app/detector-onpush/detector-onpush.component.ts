import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-detector-onpush',
  templateUrl: './detector-onpush.component.html',
  styleUrls: ['./detector-onpush.component.scss']
})
export class DetectorOnpushComponent implements OnDestroy, OnInit {

  public time: number;
  public timer: number;
  private timeSubscriptionDetach: Subscription;
  private timeSubscriptionNative: Subscription;

  @ViewChild('clock') clock: ElementRef<HTMLParagraphElement>;

  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
  }

  ngOnInit(){
    this.ref.detectChanges();
  }

  check() {
    console.log('Ref detach component view checked');
  }

  start() {
    if(this.time){
      this.time = 0;
      this.timeSubscriptionDetach.unsubscribe();
      this.ref.detectChanges();
    } else {
      this.timeSubscriptionDetach = interval(10).pipe(
      map(time => time * 10)
      ).subscribe(time => {
        this.time = time;
        // manually trigger the change detection every second
        if (this.time % 1000 === 0) {
          this.ref.detectChanges();
        }
      });
    }
  }

  startTimer() {
    if(this.timer){
      this.timer = 0;
      this.timeSubscriptionNative.unsubscribe();
      this.ref.detectChanges();
      this.clock.nativeElement.textContent = `${this.timer}`;
    } else {
      this.timeSubscriptionNative = interval(10).pipe(
        map(time => time * 10)
      ).subscribe(time => {
        this.timer = time;
        if (this.timer % 1000 === 0) {
          this.clock.nativeElement.textContent = `${time / 1000}`;
        }
      });
    }
  }

  getTime() {
    return this.time;
  }

  ngOnDestroy() {
    if (this.timeSubscriptionDetach) {
      this.timeSubscriptionDetach.unsubscribe();
    }
    if (this.timeSubscriptionNative) {
      this.timeSubscriptionNative.unsubscribe();
    }
  }

}
