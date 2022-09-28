import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', {
        validators: [
          Validators.required
        ],
        asyncValidators: [

        ],
        updateOn: 'blur'
      }),
      password: new FormControl('', [
        Validators.required
      ]),
    }, [])
  }

  ngOnInit(): void { }





  async getDataForm() {

    let response = await this.usersServices.registerUser(this.registerForm.value)
    if (response.status === 'success') {
      Swal.fire({
        icon: 'success',
        title: 'User registered',
        text: 'Your user are registered succesfully!',
      })
      setTimeout(() => {
        this.router.navigate(['/planets'])
      }, 2000)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something get wrong! Please try again',
      })
    }


  }

}
