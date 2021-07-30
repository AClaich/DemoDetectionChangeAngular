import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-onpush',
  templateUrl: './image-onpush.component.html',
  styleUrls: ['./image-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageOnpushComponent {
  @Input() src: string;

  check() {
      console.log('image component view checked');
  }
}
