import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { Company } from './Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public username : String | any;
  public data : {} | any;
  public courseModel : Company = new Company();
  public courseArray : Array<Company> = [];
  public courseId : String | any;
  public deleteId : String | any;
  public courseFound : boolean | any;
  public message : String | any; 
  public errorMessage : String | any;

  constructor(private http : HttpClient, 
    private companyService : CompanyService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
    this.getAllCompanyDetails();
  }

  getAllCompanyDetails() {
    this.companyService.getAllCompanyDetails().subscribe(data => {
      this.courseArray = Object.values(data);
    }, error => {
      console.log(error);
    });
  }

  addCompany() {
    this.companyService.addCompany(this.courseModel).subscribe(data => {
      this.data = JSON.stringify(data);
      this.courseArray.push(this.data);
    });
  }

  courseDetails() {
    this.companyService.courseDetails(this.courseId).subscribe(data => {
      this.courseFound = true;
    }, error => {
      this.errorMessage = "Course Not Found!! Please try with valid course id";
      console.log(error);
    });
  }

  deleteCompanyById() {
    this.companyService.deleteCompanyById(this.deleteId).subscribe(data => {
      this.message = "Recoard Deleted";
    }, error => {
      this.message = error.error.text;
      console.log(error.error.text);
    });
  }

  modifyStockPrice() {
    console.log("modifyStockPrice", this.courseModel);
    this.companyService.modifyStockPrice(this.courseModel).subscribe(data => {
      this.data = JSON.stringify(data);
      this.courseArray.push(this.data);
    });
  }

  sort(a: any, b: any) {
    if(a < b) {
      return -1;
    } else if (a > b) {
      return 1
    } else {
      return 0;
    }
  }

}
