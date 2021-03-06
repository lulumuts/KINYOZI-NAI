import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HairComponent } from './hair/hair.component';
import { FormsModule } from '@angular/forms';
import { HairDetailComponent } from './hair-detail/hair-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HairFormComponent } from './hair-form/hair-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule } from '@angular/material/button';
import {MatChipsModule } from '@angular/material/chips'
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {ReactiveFormsModule } from '@angular/forms';
import { environment} from 'environments/environment';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HairComponent,
    HairDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HairFormComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpClientModule,
    NgHttpLoaderModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
