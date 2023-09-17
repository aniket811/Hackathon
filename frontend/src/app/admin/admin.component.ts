import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/services/manager.service';
// import { casesapi } from 'src/models/casesapi';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','../../assets/css/tailwind.output.css']
})
export class AdminComponent implements OnInit {
  cases:any;
  isUserLoggedIn:boolean=false;
  isClerkLoggedIn:boolean=false;
  isAdminLoggedIn:boolean=false;

  constructor(private casesApi:ManagerService) { 
    this.casesApi.isUserLoggedIn.subscribe((data)=>{
      this.isUserLoggedIn=data;
    })
    this.casesApi.isAdminLoggedIn.subscribe((data)=>{
      this.isAdminLoggedIn=data;
    })
    this.casesApi.isClerkLoggedIn.subscribe((data)=>{
      this.isClerkLoggedIn=data;
    })
  }
  ngOnInit(): void {
    this.cases=this.casesApi.getCasesData();
    
  }
}
