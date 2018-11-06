import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CosplayComponent } from './cosplay/cosplay.component';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';
import { LovesComponent } from './loves/loves.component';
import { DaylightComponent } from './daylight/daylight.component';
import { DressesComponent } from './Daylight/dresses/dresses.component';
import { SchoolComponent } from './Daylight/school/school.component';
import { CasualComponent } from './Daylight/casual/casual.component';
import { MoonlightComponent } from './moonlight/moonlight.component';
import { UniformsComponent } from './Moonlight/uniforms/uniforms.component';
import { DisguisesComponent } from './Moonlight/disguises/disguises.component';
import { KingdomComponent } from './Moonlight/kingdom/kingdom.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { WeaponsComponent } from './Accessories/weapons/weapons.component';
import { JewelryComponent } from './Accessories/jewelry/jewelry.component';
import { ShoesComponent } from './Accessories/shoes/shoes.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CosplayComponent,
    LogComponent,
    RegComponent,
    LovesComponent,
    DaylightComponent,
    DressesComponent,
    SchoolComponent,
    CasualComponent,
    MoonlightComponent,
    UniformsComponent,
    DisguisesComponent,
    KingdomComponent,
    AccessoriesComponent,
    WeaponsComponent,
    JewelryComponent,
    ShoesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    NgbModule,
    Ng5SliderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
