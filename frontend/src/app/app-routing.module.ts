import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingsiteComponent } from './landingsite/landingsite.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from '../guards/auth.guard';
const routes: Routes = [
  {path:'',component:LandingsiteComponent,redirectTo:'',pathMatch:'full'},
  {path:'admin',component:AdminComponent,canActivate:[authGuard]},
  {path:'**',component:LandingsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }