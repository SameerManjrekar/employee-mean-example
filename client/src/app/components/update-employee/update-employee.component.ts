import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

//import { FlashMessagesService } from 'angular2-flash-messages';
import { Employee } from '../../Models/IEmployee';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployeemployeeForm: FormGroup;
  employee: Employee;
  navigated: boolean = false;
  emp: any;

  constructor(private formBuilder: FormBuilder,
             private employeeService: EmployeeService,
            //  private flashMessagesService: FlashMessagesService,
             private activatedRoute: ActivatedRoute,
             private router: Router) { 
              this.createForm();
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

  createForm() {
    this.updateEmployeemployeeForm = this.formBuilder.group({
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

  viewEmployee(id: number) { 
    console.log(id);   
    return this.employeeService.getEmployeeById(id).subscribe(data => {
      if(!data.success) {
        //this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {        
        this.employee = data.message[0];                 
      }
    });    
  }

  onEmployeeUpdateSubmit() {    
    this.emp = this.employee;
    //console.log(this.emp);
    // let newEmp = this.updateEmployeemployeeForm.patchValue({
    //   firstname: this.updateEmployeemployeeForm.get('firstname').value,
    //   lastname: this.updateEmployeemployeeForm.get('lastname').value,      
    //   password: this.updateEmployeemployeeForm.get('password').value,
    //   dob: this.updateEmployeemployeeForm.get('dob').value,
    //   city: this.updateEmployeemployeeForm.get('city').value,
    //   userType: this.updateEmployeemployeeForm.get('userType').value,
    //   userStatus: this.updateEmployeemployeeForm.get('userStatus').value
    // });
    //console.log("New Employee ", newEmp);
    console.log("Update ", this.updateEmployeemployeeForm.value);
    let employee = {
      firstname: this.updateEmployeemployeeForm.get('firstname').value,
      lastname: this.updateEmployeemployeeForm.get('lastname').value,      
      password: this.updateEmployeemployeeForm.get('password').value,
      dob: this.updateEmployeemployeeForm.get('dob').value,
      city: this.updateEmployeemployeeForm.get('city').value,
      userType: this.updateEmployeemployeeForm.get('userType').value,
      userStatus: this.updateEmployeemployeeForm.get('userStatus').value
    };

    return this.employeeService.updateEmployee(this.emp._id, employee).subscribe(data => {
      if(!data.success) {
        //this.flashMessagesService.show('Something went wrong', { cssClass:'alert-danger', timeout: 3000}); 
      } else {
        //this.flashMessagesService.show('Employee updated successfully', { cssClass:'alert-success', timeout: 3000}); 
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 4000);
      }
    });
  }

}
