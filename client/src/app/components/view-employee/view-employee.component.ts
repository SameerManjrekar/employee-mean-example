import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
// import { FlashMessagesService } from 'angular2-flash-messages';

import { Employee } from '../../Models/IEmployee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee: Employee;
  navigated: boolean = false;

  constructor(private employeeService: EmployeeService,             
             private activatedRoute: ActivatedRoute,
             private router: Router) { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      if (params !== undefined) {
        console.log("Sameer", params['id']);
        if (params['id'] !== undefined) {
          let id = +params['id'];
          this.navigated = true;
          this.viewEmployee(params['id']);
        }
      }
    });
  }

  viewEmployee(id: number) { 
    console.log(id);   
    return this.employeeService.getEmployeeById(id).subscribe(data => {
      console.log("View Data ", data);
      if(!data.success) {        
        //this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {        
        this.employee = data.message[0]; 
        console.log("Sammy ", this.employee);       
      }
    });    
  }

  goback() {
    this.router.navigate(['/employee']);
  }

}
