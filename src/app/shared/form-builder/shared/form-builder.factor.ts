import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  DefinedControlType,
  FormGroupType,
} from '@shared//form-builder/shared/form-builder.type';

@Injectable()
export abstract class FormBuilderFactor {
  private form: FormGroupType;

  createForm<T extends DefinedControlType<T>>(definedControls: T): FormGroup {
    this.form = new FormGroup<T>(definedControls);
    return this.form || new FormGroup({});
  }

  getForm(): FormGroupType {
    return this.form;
  }
}
