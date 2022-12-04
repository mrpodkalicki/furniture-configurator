import { AbstractControl, FormGroup } from '@angular/forms';

export type FormGroupType = FormGroup<any> | undefined;

export type DefinedControlType<T> = { [K in keyof T]: AbstractControl<any> };

export type FileType = 'json' | 'xml';
