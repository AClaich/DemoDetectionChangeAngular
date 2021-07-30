import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss']
})
export class NgZoneComponent implements OnDestroy{

  public time: number;
  private timeSubscription: Subscription;

  @ViewChild('timer') timer: ElementRef<HTMLParagraphElement>;

  constructor(private zone: NgZone) {
  }

  ngOnDestroy() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  start() {
    this.zone.runOutsideAngular(() => {
      if(this.time){
        this.time = 0;
        this.timeSubscription.unsubscribe();
        this.timer.nativeElement.textContent = `${this.time}`;
      } else {
        this.timeSubscription = interval(10).pipe(
          take(1001), // 0, 1, ..., 1000
          map(time => time * 10),
        ).subscribe(time => {
          this.time = time;
          if (this.time % 1000 === 0) {
            this.timer.nativeElement.textContent = `${time / 1000}`;
          }
        });
      }
    });
  }

  check() {
    console.log('Ref detach component view checked');
  }
}
