import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColorService } from '../services/color.service';

export interface GhostModel {
  id : number,
  color: string
}

@Component({
  selector: 'app-standard-detection',
  templateUrl: './standard-detection.component.html',
  styleUrls: ['./standard-detection.component.scss']
})
export class StandarDetectionComponent implements OnInit,OnDestroy{
  public ghosts: Array<GhostModel> = [{ id: 0, color: 'blue' }, { id: 1, color: 'red' }];
  public colors: Array<string> = ['blue', 'pink', 'harmless', 'red'];
  public color$ : Observable<string>;
  private subscribeColor: Subscription;
  public action: string = 'SimpleObject';

  constructor(private colorService: ColorService) {
  }

  ngOnInit(): void {
    this.color$ = this.colorService.getColor();
  }

  ngOnDestroy(): void {
    if(this.subscribeColor){
      this.subscribeColor.unsubscribe();
    }
  }

  public check() {
    console.log('standard-detection component view checked');
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
