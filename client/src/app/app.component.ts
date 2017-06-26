import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './services/employee.service';

//import { FlashMessagesService } from 'angular2-flash-messages';
import { Employee } from './Models/IEmployee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  employees: Employee[];
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private router: Router
             ) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    return this.employeeService.getAllEmployees().subscribe(data => {
      if(!data.success) {
        // this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {
        this.employees = data.message;
        console.log(this.employees);
        // this.flashMessagesService.show('Employees returned successful', { cssClass:'alert-success', timeout: 3000}); 
      }
    });
  }

  viewEmployee(employee: any) {
    console.log(employee);    
    let link = (['/viewemployee/' + employee._id]);
    this.router.navigate(link);    
  }

  updateEmployee(employee : any) {
    console.log(employee);
    this.router.navigate(['/updateemployee/' + employee._id]);
  }

  deleteEmployee(id: number) {
    alert('Do you want to delete employee?');
    return this.employeeService.deleteEmployee(id).subscribe(data => {
      if(!data.success) {
        //this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {
        //this.flashMessagesService.show('Employee deleted successful', { cssClass:'alert-success', timeout: 3000}); 
      }
    })
  }

  addEmployee() {
    this.router.navigate(['/addemployee']);
  }
}


