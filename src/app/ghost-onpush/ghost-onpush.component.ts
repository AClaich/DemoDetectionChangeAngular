import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GhostModel } from '../standard-detection/standard-detection.component';

@Component({
  selector: 'app-ghost-onpush',
  templateUrl: './ghost-onpush.component.html',
  styleUrls: ['./ghost-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhostOnpushComponent{
  @Input() ghostModel: GhostModel;
  @Input() color: string;

  public colorObservable : Observable<string>;

  check() {
    console.log('ghost component view checked');
  }

  getGhostImageUrl() {

    return this.color?`assets/${this.color}-ghost.gif`:`assets/${this.ghostModel.color}-ghost.gif`;
  }
}
