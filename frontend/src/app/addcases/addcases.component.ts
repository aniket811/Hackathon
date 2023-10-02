import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcases',
  templateUrl: './addcases.component.html',
  styleUrls: ['./addcases.component.css']
})
export class AddcasesComponent implements OnInit{
  caseId:number=0;
  ngOnInit(): void {
    this.generateRandomNumbers()
    
  }
  getAddCases(data:any){
    let caseFilingDate=String(data.Casefilingdate);
    data.Casefilingdate=caseFilingDate;
  } 
  generateRandomNumbers():number {

    this.caseId=Math.floor(Math.random() * 99999999);
    console.log(this.caseId); 
    return this.caseId;
  }
  
}
