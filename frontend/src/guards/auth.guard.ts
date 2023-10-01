import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagerService } from 'src/services/manager.service';
@Injectable()
export class authGuard implements CanActivate {

  constructor(private managerService: ManagerService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.managerService.isAdminLoggedIn.value||this.managerService.isUserLoggedIn.value||this.managerService.isClerkLoggedIn.value){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  // const managerService = new ManagerService();
  // const router=new Router();
}
