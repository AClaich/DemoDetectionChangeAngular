import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GhostModel } from '../standard-detection/standard-detection.component';

@Component({
  selector: 'app-ghost-ref',
  templateUrl: './ghost-ref.component.html',
  styleUrls: ['./ghost-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhostRefComponent implements OnInit {

  private color: string ='red';
  private intervalId: number;
  private colors: Array<string> = ['red', 'blue','pink', 'harmless'];

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.color = this.randomColor(this.color);
      this.ref.markForCheck();
    }, 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }

  private randomColor(currentColor: string): string{
    let color = this.colors[Math.floor(Math.random()*this.colors.length)]
    return color === currentColor ? this.randomColor(currentColor) : color ;
  }

  check() {
    console.log('ghost component view checked');
  }

  getGhostImageUrl() {
    return `assets/${this.color}-ghost.gif`;
  }
}
