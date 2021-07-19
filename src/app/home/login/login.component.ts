import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.userName, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (error) => {
        alert('Usuário ou senha incorreto');
        console.log(error);
      }
    );
  }

  teste(){
    return true
  }
}
