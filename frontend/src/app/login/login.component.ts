import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/style.css','./login.component.css']
})
export class LoginComponent {
  isLoginActive:boolean = true;
  constructor(private router:Router,private userService:ManagerService) {
    
  }
  getUserLoggedIn(data:any){
    let judgeID = data.judgeID;
    let  judgePassword = data.password;
    if(judgeID.trim() == "admin" && judgePassword.trim() == "admin"){
      this.userService.isAdminLoggedIn.next(true);
      this.router.navigate(['/admin']); 
    }

  }
  changeFormState():boolean{
    
    if(this.isLoginActive){
      this.isLoginActive = false;
      return this.isLoginActive;
    }
    this.isLoginActive = true;
    return this.isLoginActive;
  }
    getUserRegistered(data:any){
      
  }
}