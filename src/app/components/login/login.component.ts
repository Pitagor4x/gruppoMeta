import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async getDataForm(form: any) {
    try {
      console.log(form.value)
      const response: User | any = await this.usersService.login(form.value)
      if (response.token) {
        this.router.navigate(['/planets', response.token])
      } else {
        alert(response.error)
      }
    }
    catch (error) {
      console.log(error)
    }
  }
}
