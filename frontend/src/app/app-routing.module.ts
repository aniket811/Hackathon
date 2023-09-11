import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingsiteComponent } from './landingsite/landingsite.component';

const routes: Routes = [
  {path:'',component:LandingsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
