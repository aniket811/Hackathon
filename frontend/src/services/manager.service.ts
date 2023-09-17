import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { casesdata } from '../models/casesapi';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public isUserLoggedIn =new BehaviorSubject<boolean>(false);
  public isAdminLoggedIn =new BehaviorSubject<boolean>(false);
  public isClerkLoggedIn =new BehaviorSubject<boolean>(false);
    private casesdata = casesdata;
    constructor(private http:HttpClient) { }
    getCasesData(){ 
      return this.casesdata.cases;
    }
    getLoggedIn(data:any,pass:any):Observable<any>{
      const judge_id = data;
      const password = pass;
       return this.http.post('http://localhost:5000/judges/login',{judge_id,password});
    }
}
