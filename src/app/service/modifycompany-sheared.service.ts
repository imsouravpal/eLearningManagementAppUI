import { Injectable } from '@angular/core';
import { Company } from '../company/Company';

@Injectable({
  providedIn: 'root'
})
export class ModifycompanyShearedService {

  companyModel : Company = new Company();

  constructor() { }

  setModifyCompanyData(data: Company) {
    console.log("setModifyCompanyData called... data = ", data);
    this.companyModel = data;
    console.log("setModifyCompanyData called... this.companyModel = ", this.companyModel);
  }

  getModifyCompanyData() {
    console.log("getModifyCompanyData called... this.companyModel = ", this.companyModel);
    return this.companyModel;
  }

}
