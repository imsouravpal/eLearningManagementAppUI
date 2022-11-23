import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company/Company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  private courseId : string | any;
  public courseName : string | any;
  public courseDuration : number | any;
  public courseDescription : string | any;
  public courseModel : Company | any;
  public companyFound : boolean | any;
  public companyStockListFound : boolean | any;
  public errorMessage : String | any;

  constructor(private route : ActivatedRoute,
    public companyService : CompanyService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    console.log("this.courseId = ", this.courseId);
    this.searchCompany();
  }

  searchCompany() {
    this.companyService.courseDetails(this.courseId).subscribe(data => {
      this.courseModel = Object.values(data);
      this.courseId = data.courseId;
      this.courseName = data.courseName;
      this.courseDuration = data.courseDuration;
      this.courseDescription = data.courseDescription;
      this.companyFound = true;
    }, error => {
      this.companyFound = false;
      this.errorMessage = "Course Not Found!! Please try with valid course id";
      console.log(error);
    });
  }

  onSubmit() {}

}
