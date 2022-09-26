import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', [])
    }, [])
  }

  ngOnInit(): void {
  }

  getLoginForm() {
    if (this.loginForm.value.username.toLowerCase() === 'luke' && this.loginForm.value.password === 'skywalker') {
      this.router.navigate(['/planets'])
    } else {
      alert('Your username or password are incorrect')
    }
  }

}
