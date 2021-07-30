import { Component } from '@angular/core';


@Component({
  selector: 'app-change-detector-ref',
  templateUrl: './change-detector-ref.component.html',
  styleUrls: ['./change-detector-ref.component.scss']
})
export class ChangeDetectorRefComponent{

  public time: number = 0;
  public action: string = 'Standard';

}
