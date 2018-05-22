import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  log = {
    email: '',
    password: ''
  };
  err;
  loggedList = [];

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  login () {
    this._dataService.login(this.log)
      .then(data => {
        if (data.err) {
          this.err = data.err;
        } else {
          this.log = {
            email: '',
            password: ''
          };
          this._router.navigate(['/']);
        }
      });
  }

}
