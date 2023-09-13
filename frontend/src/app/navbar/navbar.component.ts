import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../assets/css/style.css']
})
export class NavbarComponent {
  constructor(private dialog:MatDialog) {}
  getUserLoggedIn(){
    this.dialog.open(LoginComponent, {
      width: '40rem',
    });
  }

}
