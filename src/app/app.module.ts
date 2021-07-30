import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { GhostComponent } from './ghost/ghost.component';
import { StandarDetectionComponent } from './standard-detection/standard-detection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorRefComponent } from './change-detector-ref/change-detector-ref.component';
import { OnpushDetectionComponent } from './onpush-detection/onpush-detection.component';
import { FormsModule } from '@angular/forms';
import { ImageOnpushComponent } from './image-onpush/image-onpush.component';
import { GhostOnpushComponent } from './ghost-onpush/ghost-onpush.component';
import { DetectorOnpushComponent } from './detector-onpush/detector-onpush.component';
import { DetectorStandardComponent } from './detector-standard/detector-standard.component';
import { NgZoneComponent } from './ng-zone/ng-zone.component';
import { GhostRefComponent } from './ghost-ref/ghost-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    GhostComponent,
    StandarDetectionComponent,
    ChangeDetectorRefComponent,
    OnpushDetectionComponent,
    ImageOnpushComponent,
    GhostOnpushComponent,
    DetectorOnpushComponent,
    DetectorStandardComponent,
    NgZoneComponent,
    GhostRefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
