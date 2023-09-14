import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingsiteComponent } from './landingsite/landingsite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ManagerService } from 'src/services/manager.service';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from 'src/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingsiteComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ManagerService,authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
