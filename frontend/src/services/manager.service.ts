import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public isUserLoggedIn =new BehaviorSubject<boolean>(false);
  public isAdminLoggedIn =new BehaviorSubject<boolean>(false);
    constructor(private http:HttpClient) { }
    postLoginData(data:any):{

    }
}
