import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FileReaderModule } from '@shared//file-reader/file-reader.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FileReaderModule,
    MatFormFieldModule,
  ],
})
export class DashboardModule {}
