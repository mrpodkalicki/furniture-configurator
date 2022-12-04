import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileReaderComponent } from './components/file-reader/file-reader.component';

@NgModule({
  declarations: [FileReaderComponent],
  exports: [FileReaderComponent],
  imports: [CommonModule],
})
export class FileReaderModule {}
