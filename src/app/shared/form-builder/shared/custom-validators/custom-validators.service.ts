import { Injectable } from '@angular/core';
import { FileType } from '@shared//form-builder/shared/form-builder.type';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidatorsService {
  requiredFileType(type: FileType) {
    return function (control: FormControl) {
      const file = control.value;
      if (file) {
        const extension = file.name.split('.')[1].toLowerCase();
        if (type.toLowerCase() !== extension.toLowerCase()) {
          return {
            requiredFileType: true,
          };
        }

        return null;
      }

      return null;
    };
  }
}
