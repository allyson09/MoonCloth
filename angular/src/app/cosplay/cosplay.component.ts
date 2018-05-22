import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cosplay',
  templateUrl: './cosplay.component.html',
  styleUrls: ['./cosplay.component.css']
})
export class CosplayComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

}
