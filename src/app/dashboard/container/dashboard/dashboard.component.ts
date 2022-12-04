import { Component, OnInit } from '@angular/core';
import { ConfiguratorFormService } from '@app/dashboard/shered/configurator-form/configurator-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from '@shared//form-builder/shared/custom-validators/custom-validators.service';
import { FileReaderService } from '@shared//file-reader/shared/file-reader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  configuratorForm = this.createConfiguratorForm();

  constructor(
    private configuratorFormService: ConfiguratorFormService,
    private customValidatorsService: CustomValidatorsService,
    private fileReaderService: FileReaderService
  ) {}

  ngOnInit(): void {
    console.log(this.configuratorForm);
  }

  getDataFromFile() {
    const file = this.configuratorForm.value.file;
    const fileData$ = this.fileReaderService.getDataFromFile(file);

    fileData$.subscribe((data: any) => {
      console.log(data, 'data');
    });
  }

  private createConfiguratorForm(): FormGroup {
    return this.configuratorFormService.createForm({
      file: new FormControl(null, [
        Validators.required,
        this.customValidatorsService.requiredFileType('json'),
        this.customValidatorsService.requiredFileType('xml'),
      ]),
    });
  }
}
