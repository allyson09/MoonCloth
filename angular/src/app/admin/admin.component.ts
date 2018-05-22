import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  outfit = {
    title: '',
    price: '',
    description: '',
    category: '',
    subCategory: '',
    quantity: '',
    image: '',
    sizes: [
      {
        'XS': '',
        'S': '',
        'M': '',
        'L': '',
        'XL': ''
      }
    ],
    colors: [
      {
        'red': '',
        'pink': '',
        'orange': '',
        'yellow': '',
        'white': '',
        'gray': '',
        'black': '',
        'green': '',
        'blue': '',
        'purple': '',
        'brown': '',
        'multi': ''
      },
    ]
  };

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  create () {
    console.log(this.outfit);
    this._dataService.createOutfit(this.outfit)
      .then(data => {
        if (data.err) {
          console.log('womp womp');
        } else {
          this.outfit = {
            title: '',
            price: '',
            description: '',
            category: '',
            subCategory: '',
            quantity: '',
            image: '',
            sizes: [
              {
                'XS': '',
                'S': '',
                'M': '',
                'L': '',
                'XL': ''
              }
            ],
            colors: [
              {
                'red': '',
                'pink': '',
                'orange': '',
                'yellow': '',
                'white': '',
                'gray': '',
                'black': '',
                'green': '',
                'blue': '',
                'purple': '',
                'brown': '',
                'multi': ''
              },
            ]
          };
          this._router.navigate(['/home']);
        }
      });
  }
}
