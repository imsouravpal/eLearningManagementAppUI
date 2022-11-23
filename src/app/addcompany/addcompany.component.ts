import { Component, OnInit } from '@angular/core';
import { Company } from '../company/Company';
import { CompanyService } from '../service/company.service';
import { NotoficationService } from '../service/notofication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewallcompanyComponent } from '../viewallcompany/viewallcompany.component';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  public data : {} | any;
  public courseModel : Company = new Company();
  public courseArray : Array<Company> = [];

  constructor(
    public companyService : CompanyService,
    private notificationService : NotoficationService,
    private dialogRef : MatDialogRef<ViewallcompanyComponent>
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("addCompany called : this.courseModel = ", this.companyService.form.value);

    if(this.companyService.form.valid) {
      this.courseModel = this.companyService.form.value;
      console.log("Inside if : this.courseModel = ", this.courseModel);
      this.companyService.addCompany(this.courseModel).subscribe(data => {
        this.companyService.form.reset();
        this.companyService.initializeFormGroup();
        this.notificationService.success('Submitted Successfully');
        this.dialogRef.close();
      });
    }
  }

  onClear() {
    this.companyService.form.reset();
    this.companyService.initializeFormGroup();
  }

  onClose() {
    this.dialogRef.close();
  }

}
