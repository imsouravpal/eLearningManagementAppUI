import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { CompanyComponent } from './company/company.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialTestingComponent } from './material-testing/material-testing.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { ViewallcompanyComponent } from './viewallcompany/viewallcompany.component';
import { CompanyService } from './service/company.service';
import { ModifycompanyComponent } from './modifycompany/modifycompany.component';
import { MatCustomisedConfirmDialogComponent } from './mat-customised-confirm-dialog/mat-customised-confirm-dialog.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { MatMenuModule } from '@angular/material/menu';
import { UdpagesComponent } from './udpages/udpages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    WelcomeComponent,
    ErrorComponent,
    CompanyComponent,
    MaterialTestingComponent,
    LogoutComponent,
    FooterComponent,
    AddcompanyComponent,
    ViewallcompanyComponent,
    ModifycompanyComponent,
    MatCustomisedConfirmDialogComponent,
    CompanydetailsComponent,
    SidebarmenuComponent,
    UdpagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [CompanyService], // to use this in other component classes
  bootstrap: [AppComponent],
  entryComponents: [AddcompanyComponent, MatCustomisedConfirmDialogComponent] // in order to open a component in dialog window we have to add that component in here.
})
export class AppModule { }
