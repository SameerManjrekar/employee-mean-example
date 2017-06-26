import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { DatePipe } from '@angular/common';

import { EmployeeService } from '../../services/employee.service';

// import { FlashMessagesService } from 'angular2-flash-messages'
import { Employee } from '../../Models/IEmployee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;  
  employees: Employee[];
  employee: Employee;

  constructor(private formBuilder: FormBuilder,
             private employeeService: EmployeeService,             
             private router: Router
             ) { 
    this.createForm();
  }

  ngOnInit() {
    this.getAllEmployees();    
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({
      firstname: ['', Validators.compose([
        Validators.required
      ])],
      lastname: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)        
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      dob: [''],      
      city: ['', Validators.compose([
        Validators.required
      ])],
      userType: ['', Validators.compose([
        Validators.required
      ])],
      userStatus: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  onEmployeeSubmit() {
    console.log('Sameer');
    const employee = {
      firstname: this.employeeForm.get('firstname').value,
      lastname: this.employeeForm.get('lastname').value,
      email: this.employeeForm.get('email').value,
      password: this.employeeForm.get('password').value,
      dob: this.employeeForm.get('dob').value,
      city: this.employeeForm.get('city').value,
      userType: this.employeeForm.get('userType').value,
      userStatus: this.employeeForm.get('userStatus').value
    };
    console.log("Employee ", employee);

    return this.employeeService.saveEmployee(employee).subscribe(data => {
      if(!data.success) {
        //this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {
        //this.flashMessagesService.show('Employee saved successfully', { cssClass:'alert-success', timeout: 3000}); 
      }
    });
    
  }  

  getAllEmployees() {
    return this.employeeService.getAllEmployees().subscribe(data => {
      if(!data.success) {
        //this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {
        this.employees = data.message;
        console.log(this.employees);
        //this.flashMessagesService.show('Employees returned successful', { cssClass:'alert-success', timeout: 3000}); 
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

}
