import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HairComponent } from './hair/hair.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { HairDetailComponent } from './hair-detail/hair-detail.component';
=======
import { HairDetailComponent }  from './hair-detail/hair-detail.component';

>>>>>>> 424d63719f976c5818997ec0f6b875664e507558
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HairComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HairDetailComponent },
<<<<<<< HEAD
=======

>>>>>>> 424d63719f976c5818997ec0f6b875664e507558
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule],

})
export class AppRoutingModule { }
