import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HairComponent } from './hair/hair.component';
import { FormsModule } from '@angular/forms';
import { HairDetailComponent } from './hair-detail/hair-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import  { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http'
>>>>>>> 783dad3dbfaa7cfb1ea5d1fc299408002a733298


@NgModule({
  declarations: [
    AppComponent,
    HairComponent,
    HairDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    HttpClientModule
>>>>>>> 783dad3dbfaa7cfb1ea5d1fc299408002a733298

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
