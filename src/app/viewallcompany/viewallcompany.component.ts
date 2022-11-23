import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company/Company';
import { CompanyService } from '../service/company.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { ModifycompanyComponent } from '../modifycompany/modifycompany.component';
import { NotoficationService } from '../service/notofication.service';
import { CustomisedconfirmdialogService } from '../service/customisedconfirmdialog.service';

@Component({
  selector: 'app-viewallcompany',
  templateUrl: './viewallcompany.component.html',
  styleUrls: ['./viewallcompany.component.css']
})
export class ViewallcompanyComponent implements OnInit {

  public username : string | any;
  public courseArray : Array<Company> = [];
  public courseModel : Company = new Company();
  public listofCoursesData : MatTableDataSource<any> | any;
  public searchKey : string | any;
  public message : String | any;

  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  displayedColumns: string[] = [
    'courseId', 'courseName', 'courseDuration', 'courseDescription', 
    'technology', 'lunchUrl', 'actions'
  ];

  constructor(private http : HttpClient, 
    private companyService : CompanyService,
    private route : ActivatedRoute,
    private dialog : MatDialog,
    private notoficationService : NotoficationService,
    private customisedconfirmdialogService: CustomisedconfirmdialogService,
    private router : Router) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
    this.username = sessionStorage.getItem('authenticateUser');
    this.getAllCompanyDetails();
  }

  dataSource = new MatTableDataSource(this.courseArray);

  getAllCompanyDetails() {
    console.log(" getAllCompanyDetails() called..... ")
    this.companyService.getAllCompanyDetails().subscribe(data => {
      console.log(Object.values(data));
      this.courseArray = Object.values(data);
      this.listofCoursesData = new MatTableDataSource(this.courseArray);
      this.listofCoursesData.sort = this.sort;
      this.listofCoursesData.paginator = this.paginator;
      console.log("this.courseArray = ", this.courseArray);
    }, error => {
      console.log(error);
    });
  }

  applyFilter() {
    this.listofCoursesData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  addNewCompany() {
    this.companyService.initializeFormGroup();
    this.dialog.open(AddcompanyComponent);
  }

  modifyStockPrice(row: any) {
    this.companyService.populateForm(row);
    this.dialog.open(ModifycompanyComponent);
  }

  deleteCompanyById(courseId : any) {
    if(confirm('Are you sure to delete this recoard ?')) {
      this.companyService.deleteCompanyById(courseId).subscribe(data => {
        console.log("data = ", data);
        this.message = "Recoard Deleted!";
      }, error => {
        this.message = error.error.text;
        console.log(error.error.text);
      });
    }
    this.message = "Recoard Deleted!";
    console.log("this.message " + this.message);
    this.notoficationService.warn(this.message);
  }

}
