import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GhostModel } from '../standard-detection/standard-detection.component';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent {
  @Input() ghostModel: GhostModel;
  @Input() color: string;

  public colorObservable : Observable<string>;

  check() {
    console.log('ghost component view checked');
  }

  getGhostImageUrl() {
    if(this.color){
      return `assets/${this.color}-ghost.gif`;
    }
    return `assets/${this.ghostModel.color}-ghost.gif`;
  }

}
