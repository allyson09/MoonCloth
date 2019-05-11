import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  reg = {
    firstName: '',
    lastName: '',
    email: '',
    cemail: '',
    password: '',
    cpassword: '',
    admin: ''
  };
  regemailerr;
  regpasserr;
  errorMsg;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.reg.firstName == '' && this.reg.lastName == '' && this.reg.email == '' && this.reg.cemail == '' && this.reg.password == '' && this.reg.cpassword == '' && this.reg.admin == '') {
      this.errorMsg = 'Please enter registration info.';
    }
    if (this.reg.email !== this.reg.cemail) {
      this.regemailerr = 'Your emails must match!';
    }
    if (this.reg.password !== this.reg.cpassword) {
      this.regpasserr = 'Your passwords must match!';
    }
    if (this.reg.password === this.reg.cpassword && this.reg.email === this.reg.cemail) {
      if (this.reg.admin === 'sailormoon') {
        const data = {
          firstName: this.reg.firstName,
          lastName: this.reg.lastName,
          email: this.reg.email,
          password: this.reg.password,
          admin: 'yay'
        };
        this._dataService.register(data);
      } else {
        const data = {
          firstName: this.reg.firstName,
          lastName: this.reg.lastName,
          email: this.reg.email,
          password: this.reg.password,
          admin: 'womp'
        };
        this._dataService.register(data);
      }
    }
    this.reg = {
      firstName: '',
      lastName: '',
      email: '',
      cemail: '',
      password: '',
      cpassword: '',
      admin: ''
    };
    this.regemailerr = '';
    this.regpasserr = '';
    this.router.navigate(['/']);
  }
}
