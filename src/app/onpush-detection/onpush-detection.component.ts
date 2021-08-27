import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColorService } from '../services/color.service';
import { GhostModel } from '../standard-detection/standard-detection.component';

@Component({
  selector: 'app-onpush-detection',
  templateUrl: './onpush-detection.component.html',
  styleUrls: ['./onpush-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushDetectionComponent implements OnInit, OnDestroy{

  private subscribeColor: Subscription;
  public ghosts: Array<GhostModel> = [{ id: 0, color: 'blue' }, { id: 1, color: 'red' }];
  public colors: Array<string> = ['blue', 'pink', 'harmless', 'red'];
  public color$: Observable<string>;
  public action: string = "SimpleObject";

  constructor(private colorService: ColorService) {
  }

  ngOnInit(){
    this.color$ = this.colorService.getColor();
  }

  ngOnDestroy(): void {
    if(this.subscribeColor){
      this.subscribeColor.unsubscribe();
    }
  }

  public check() {
    console.log('onpush-detection component view checked');
  }

  public changeColor(id : number) {
    this.ghosts[id].color = this.randomColor(id);
  }

  public changeObject(id : number) {
    const ghost = this.ghosts[id];
    this.ghosts[id] = { ...ghost, color: this.randomColor(id) };
  }

  private randomColor(id : number) : string{
    let color = this.colors[Math.floor(Math.random()*this.colors.length)]
    return color === this.ghosts[id].color ? this.randomColor(id) : color ;
  }

  public changeColorSubscribe(color: string){
    this.colorService.setColor(color);

    this.subscribeColor = this.colorService.getColor()
    .subscribe(color => {
      this.ghosts.forEach(ghost => {
        if(ghost.id === 0){
          ghost.color = color;
        }
      });
    });
  }

  public changeColorObservable(color: string){
    this.colorService.setColor(color);
    this.color$ = this.colorService.getColor();
  }

  public something(){
    console.log('Do something');
  }

}
