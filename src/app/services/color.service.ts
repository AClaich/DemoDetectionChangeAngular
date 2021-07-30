import { Injectable  } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private colors: Array<string> = ['blue', 'pink', 'harmless', 'red'];
  private color$: Observable<string> = from(['red']);

  constructor() { }

  setColor(color : string){
    let newColor = this.colors[Math.floor(Math.random()*this.colors.length)];
    color==newColor ? this.setColor(color) : this.color$ = from([newColor]);
  }

  getColor() : Observable<string>{
    return this.color$;
  }
}
