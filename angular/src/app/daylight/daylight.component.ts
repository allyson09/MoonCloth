import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daylight',
  templateUrl: './daylight.component.html',
  styleUrls: ['./daylight.component.css']
})
export class DaylightComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { 
    this.getDaylight();
  }

  outfits;
  ngOnInit() {
  }

  getDaylight() {
    this._dataService.getDaylight()
    .then (data => {
      this.outfits = data.outfitRes;
    });
  }

}
