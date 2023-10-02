import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ManagerService } from 'src/services/manager.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../assets/css/style.css']
})
export class NavbarComponent {
  isAdminLoggedIn:boolean=false;
  isUserLoggedIn:boolean=false;
  isClerkLoggedIn:boolean=false;
  userName:any="";
  constructor(private dialog:MatDialog,private manager:ManagerService,private toast:ToastrService) {
    this.manager.isAdminLoggedIn.subscribe((data)=>{
      this.isAdminLoggedIn=data;
    })
    this.manager.isUserLoggedIn.subscribe((data)=>{
      this.isUserLoggedIn=data;
    })
    this.manager.isClerkLoggedIn.subscribe((data)=>{
      this.isUserLoggedIn=data;
    })
    this.manager.userInformation.subscribe((data)=>{
      this.userName=data.name
    })
  }
  getUserLoggedIn(){
    this.dialog.open(LoginComponent, {
      width: '40rem'
    
    });
  }
  getLoginState():boolean{
    if(this.isAdminLoggedIn || this.isUserLoggedIn || this.isClerkLoggedIn){
      return false;
    }

    return true;
  }
  getAdminLoggedOut(){
    // this.manager.isAdminLoggedIn.next(false);
    this.toast.success("Admin Logged Out");    
    sessionStorage.clear();
    window.location.reload();
  }
  getUserLoggedOut(){
    sessionStorage.clear();
    // this.manager.isUserLogg/edIn.next(false);
    window.location.reload();
    this.toast.success("Judge Logged Out Successfull");    
  }
  getClerkLoggedOut(){
    sessionStorage.clear();
    // this.manager.isClerkLoggedIn.next(false);
    this.toast.success("Clerk Logged Out");    
    window.location.reload();
  }
}
