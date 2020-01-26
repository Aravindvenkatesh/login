import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  employees = [{
    empid: 'E23647',
    name: 'aravind',
    age: 22,
    company: "Infosys",
    salary: 80000,
    designation: 'fullstack developer',
    doj: new Date('06/08/2019'),
    location: 'Bangalore'

  },
  {
  empid: 'T53647',
  name: 'Rajesh',
  age: 24,
  company: "TCS",
  salary: 80000,
  designation: 'HTML developer',
  doj: new Date('06/08/1995'),
  location: 'Anantapur'

},
{
  empid: 'A43647',
  name: 'Kiran',
  age: 24,
  company: "CTS",
  salary: 50000,
  designation: 'frontend developer',
  doj: new Date('08/06/2018'),
  location: 'Bangalore'

}];

addEmp(){
  this.employees.unshift({
    empid: 'A43647',
    name: 'karthi',
    age: 24,
    company: "CTS",
    salary: 50000,
    designation: 'frontend developer',
    doj: new Date('06/08/1995'),
    location: 'Bangalore'    
  } )
}
removeEmp(emp){
let index = this.employees.indexOf(emp);
this.employees.splice(index,1);
}
  constructor() { }

  ngOnInit() {
  }

}
