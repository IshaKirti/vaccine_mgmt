import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
newPatientClicked = false;
patient=[
  {name:'Isha', Vaccine:'Covishield'},
  {name:'Akshay', Vaccine:'Covaxin'} ,
  {name:'Sujata', Vaccine:'Covishield'}
];
color:any;
  constructor() { }

  ngOnInit(): void {
  }
 model:any={};
 model2:any={};
 addPatient(){
   this.patient.push(this.model);
   this.model= {}
 }

 deletePatient(i:any){
   this.patient.splice(i);
   console.log(i)
 }
 myValue:any;
 updatePatient(updatePatientInfo:any){
   this.model2.name = this.patient[updatePatientInfo].name;
   this.model2.vaccine = this.patient[updatePatientInfo].Vaccine;
   this.myValue=updatePatientInfo;
}
newPatient(){
  let updatePatientInfo = this.myValue;
  for(let i=0; i<this.patient.length; i++){
    if(i==updatePatientInfo){
      this.patient[i]=this.model2;
      this.model2={}
    }
  }
}
addNewPatientBtn(){
  this.newPatientClicked=!this.newPatientClicked;

}
changeColorOne(){
  this.color=!this.color;
  if(this.color){
    return '#ffffff';

  }else{
    return '#f6f6f6';
  }
}
}
