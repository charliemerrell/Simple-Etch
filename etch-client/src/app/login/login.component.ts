import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  public password = new FormControl('');

  ngOnInit(): void {}

  onClickLogin() {
    localStorage.setItem('password', this.password.value);
    this.router.navigate(['cards']);
  }
}
