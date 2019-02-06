import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUsersComponent } from './search-users/search-users.component';
import { DetailsComponent }     from './details/details.component';
import { HomeComponent }        from './home/home.component';

const routes: Routes = [
  { path: 'search', component: SearchUsersComponent },
  { path: 'search/:login', component: DetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}