import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from 'src/services/manager.service';
import { AddclerkComponent } from '../addclerk/addclerk.component';
import { AddjudgeComponent } from '../addjudge/addjudge.component';
import { identifierName } from '@angular/compiler';
// import { casesapi } from 'src/models/casesapi';
export interface Clerks{
  judge_id:string;
  name:string;
  email:string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../assets/css/tailwind.output.css'],
})
export class AdminComponent implements OnInit {
  cases: any;
  isUserLoggedIn: boolean = false;
  isClerkLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  casesLengths: any[] = [];
  casesLength: any;
  clerks:Clerks[]=[];
  isViewClerk:boolean=false;
  dataSource=this.clerks;
  viewCasesText: string = 'View Clerks';
  displayedColumns: string[] = ['name', 'email', 'judge_id']; 
  constructor(private casesApi: ManagerService,private dialog:MatDialog) {
    this.casesApi.isUserLoggedIn.subscribe((data) => {
      this.isUserLoggedIn = data;
    });
    this.casesApi.isAdminLoggedIn.subscribe((data) => {
      this.isAdminLoggedIn = data;
    });
    this.casesApi.isClerkLoggedIn.subscribe((data) => {
      this.isClerkLoggedIn = data;
    });
  }
  ngOnInit(): void {
    this.cases = this.casesApi.getCasesData();

    this.casesLength = this.casesApi.getCasesData().length;
  }
  AddClerkPopUp(){
    this.dialog.open(AddclerkComponent,{
      width:'40rem'
    });
  }
  AddJudgePopUp(){
    this.dialog.open(AddjudgeComponent,{
      width:'40rem'
    });
  }
  ViewClerks(){
 
    if(this.isViewClerk){
      this.viewCasesText = 'View Clerks';
      this.isViewClerk = false;
    }
    else{
      this.viewCasesText = 'View Cases';
      this.isViewClerk = true;
    }
    this.casesApi.getAllClerks().subscribe((data)=>{  
        this.clerks=data;
    })
  }
}
