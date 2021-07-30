import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatRadioModule,
    DragDropModule,
    MatSlideToggleModule
  ],
  providers: [
  ]
})
export class AngularMaterialModule { }
