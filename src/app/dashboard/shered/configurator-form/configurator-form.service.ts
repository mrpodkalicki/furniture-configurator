import { Injectable } from '@angular/core';
import { FormBuilderFactor } from '@shared//form-builder/shared/form-builder.factor';
import { FormGroupType } from '@shared//form-builder/shared/form-builder.type';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorFormService extends FormBuilderFactor {
  getCreatedForm(): FormGroupType {
    return this.getForm();
  }
}
