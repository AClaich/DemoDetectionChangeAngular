import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectorRefComponent } from './change-detector-ref/change-detector-ref.component';
import { OnpushDetectionComponent } from './onpush-detection/onpush-detection.component';
import { StandarDetectionComponent } from './standard-detection/standard-detection.component';

export const standardDetection = 'standard-detection';
export const onpushDetection = 'onpush-detection';
export const changeDetectorRef = 'change-detector-ref';

const routes: Routes = [
  {path:'', redirectTo: standardDetection, pathMatch: 'full'},
  {path: standardDetection, component: StandarDetectionComponent},
  {path: onpushDetection, component: OnpushDetectionComponent},
  {path: changeDetectorRef, component: ChangeDetectorRefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
