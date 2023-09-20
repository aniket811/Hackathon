import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/style.css', './login.component.css'],
})
export class LoginComponent {
  isLoginActive: boolean = true;
  constructor(
    private router: Router,
    private userService: ManagerService,
    private dialog: MatDialog,
    private toast: ToastrService
  ) {}
  getUserLoggedIn(data: any) {
    let judge_id = data.judgeID;
    let password = data.password;
    this.userService.getLoggedIn(judge_id, password).subscribe(
      (res: any) => {
        sessionStorage.setItem('user', res.result.judge_id);
        sessionStorage.setItem('userpassword', res.result.password);
        if (res.result.userType == 'Admin') {
          this.dialog.closeAll();

          this.userService.isAdminLoggedIn.next(true);
          this.toast.success('Admin Logged In');
        } else if (res.result.userType == 'judge') {
          this.dialog.closeAll();
          this.userService.isUserLoggedIn.next(true);
          this.toast.success('Judge Logged In');
        } else if (res.result.userType == 'Clerk') {
          this.dialog.closeAll();
          this.userService.isUserLoggedIn.next(true);
          this.toast.success('User Logged In');
        }

        this.router.navigate(['/admin']);
      },
      (err: any) => {
        this.toast.error('Invalid Credentials');
      }
    );
  }
}
