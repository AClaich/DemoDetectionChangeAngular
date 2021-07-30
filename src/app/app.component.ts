import { ChangeDetectionStrategy, Component } from '@angular/core';
import { changeDetectorRef, onpushDetection, standardDetection } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'demo-onpush';
  links = [
    {
      label: 'Standard Detection Exemple',
      link: standardDetection,
      enabled: true,
      index: 0
    }, {
      label: 'Onpush Detection Exemple',
      link: onpushDetection,
      enabled: true,
      index: 1
    }, {
      label: 'Change Detector Ref Exemple',
      link: changeDetectorRef,
      enabled: true,
      index: 2
    }
  ];
}
