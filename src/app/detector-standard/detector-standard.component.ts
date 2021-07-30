import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detector-standard',
  templateUrl: './detector-standard.component.html',
  styleUrls: ['./detector-standard.component.scss']
})
export class DetectorStandardComponent implements OnDestroy {

  public time: number = 0;
  private timeSubscription: Subscription;

  constructor() {
  }

  check() {
    console.log('Standard ref component view checked');
  }

  start() {
    if(this.time){
      this.time = 0;
      this.timeSubscription.unsubscribe();
    } else {
      this.timeSubscription = interval(10).pipe(
        map(time => time * 10)
        ).subscribe(time => {
          this.time = time;
        });
    };
  }

  getTime() {
    return this.time?this.time:0;
  }

  ngOnDestroy() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
