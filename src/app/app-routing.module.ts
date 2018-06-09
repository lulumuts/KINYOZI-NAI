import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HairComponent } from './hair/hair.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HairDetailComponent }  from './hair-detail/hair-detail.component';
import { PortfolioComponent }  from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HairComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HairDetailComponent },
  { path: 'allstyles', component: PortfolioComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule],

})
export class AppRoutingModule { }
