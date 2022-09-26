import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private usersServices: UsersService
  ) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      username: new FormControl('', []),
      password: new FormControl('', []),
    }, [])
  }

  ngOnInit(): void { }

  getDataForm() {
    console.log(this.registerForm.value)
  }

}
