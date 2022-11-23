import { Component, OnInit } from '@angular/core';
import { Company } from '../company/Company';
import { CompanyService } from '../service/company.service';
import { ModifycompanyShearedService } from '../service/modifycompany-sheared.service';
import { NotoficationService } from '../service/notofication.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ViewallcompanyComponent } from '../viewallcompany/viewallcompany.component';

@Component({
  selector: 'app-modifycompany',
  templateUrl: './modifycompany.component.html',
  styleUrls: ['./modifycompany.component.css']
})
export class ModifycompanyComponent implements OnInit {

  public data : {} | any;
  public companyModel : Company = new Company();
  public companyArray : Array<Company> = [];

  constructor(
    public companyService : CompanyService,
    private notificationService : NotoficationService,
    private modifycompanyShearedService : ModifycompanyShearedService,
    private dialogRef : MatDialogRef<ViewallcompanyComponent>
    ) { }

  ngOnInit(): void {
    this.companyModel = this.modifycompanyShearedService.getModifyCompanyData();
    console.log("this.companyModel = ", this.companyModel);
  }

  onSubmit() {
    console.log("modifyCompany called : this.companyService.form.value = ", this.companyService.form.value);

    if(this.companyService.form.valid) {
      this.companyModel = this.companyService.form.value;
      console.log("Inside if of modifyCompany : this.companyModel = ", this.companyModel);
      this.companyService.modifyStockPrice(this.companyModel).subscribe(data => {
        this.companyService.form.reset();
        this.companyService.initializeFormGroup();
        this.notificationService.success('Submitted Successfully');
        this.dialogRef.close();
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}
