import { Component, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileReaderComponent,
      multi: true,
    },
  ],
})
export class FileReaderComponent implements ControlValueAccessor {
  file: File | null = null;

  constructor(private host: ElementRef<HTMLInputElement>) {}

  onChange: Function = () => {};

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {}

  writeValue(obj: any): void {
    this.host.nativeElement.value = '';
    this.file = null;
  }
}
