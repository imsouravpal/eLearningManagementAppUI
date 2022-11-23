import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Company } from '../company/Company';
import * as _ from 'lodash';
import { Users } from '../signup/Users';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public companies : Company[] | any;
  public company : Company = new Company();
  private apiGet : string = `http://localhost:8081/api/v1.0/lms/courses/getall`;
  private apiPost : string = `http://localhost:8081/api/v1/market/company/register`;

  constructor(private http : HttpClient) { }

  form : FormGroup = new FormGroup({
    courseId: new FormControl('', Validators.required),
    courseName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    courseDuration: new FormControl('', Validators.required),
    courseDescription: new FormControl('', Validators.required),
    technology: new FormControl('', Validators.required),
    lunchUrl: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')])
  });

  usersForm : FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    pswrepeat: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      courseId: '',
      courseName: '',
      courseDuration: '',
      courseDescription: '',
      technology: '',
      lunchUrl: ''
    });
  }

  registerUser(userModel : Users) : Observable<Users> {
    console.log("registerUser service called");
    console.log(userModel);
    return this.http.post<Users> (`http://localhost:8081/api/v1.0/lms/company/register`, userModel);
  }

  addCompany(courseModel : Company) : Observable<Company> {
    console.log("addCompany service called");
    console.log(courseModel);
    return this.http.post<Company> (`http://localhost:8081/api/v1.0/lms/courses/add/`, courseModel);
  }

  getAllCompanyDetails() : Observable<Array<Company>> {
    return this.http.get<Array<Company>> (this.apiGet); 
  }

  courseDetails(courseId : string) : Observable<Company> {
    return this.http.get<Company>(`http://localhost:8081/api/v1.0/lms/courses/info/${courseId}`);
  }

  deleteCompanyById(deleteId : string) : Observable<String> {
    return this.http.delete<String>(`http://localhost:8081/api/v1.0/lms/courses/delete/${deleteId}`);
  }

  modifyStockPrice(companyModel : Company) : Observable<Company> {
    console.log("modifyStockPrice service called");
    console.log(companyModel);
    return this.http.put<Company> (`http://localhost:8081/api/v1/market/stock/add`, companyModel);
  }

  populateForm(company: Company) {
    this.form.setValue(_.omit(company, 'date'));
  }

}
