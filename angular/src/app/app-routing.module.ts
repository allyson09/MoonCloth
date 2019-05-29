import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';
import { LovesComponent } from './loves/loves.component';
import { DaylightComponent } from './daylight/daylight.component';
import { MoonlightComponent } from './moonlight/moonlight.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CasualComponent } from './Daylight/casual/casual.component';
import { DressesComponent } from './Daylight/dresses/dresses.component';
import { SchoolComponent } from './Daylight/school/school.component';
import { DisguisesComponent } from './Moonlight/disguises/disguises.component';
import { UniformsComponent } from './Moonlight/uniforms/uniforms.component';
import { KingdomComponent } from './Moonlight/kingdom/kingdom.component';
import { JewelryComponent } from './Accessories/jewelry/jewelry.component';
import { ShoesComponent } from './Accessories/shoes/shoes.component';
import { WeaponsComponent } from './Accessories/weapons/weapons.component';
import { CosplayComponent } from './cosplay/cosplay.component';
import { AdminComponent } from './admin/admin.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'join', component: RegComponent},
  {path: 'login', component: LogComponent},
  {path: 'loves', component: LovesComponent},
  {path: 'daylight', component: DaylightComponent},
  {path: 'moonlight', component: MoonlightComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'moon-gallery', component: CosplayComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'outfit/:id', component: ItemDetailsComponent},
  {path: 'accesserie/:id', component: ItemDetailsComponent},
  // {
  //   path: 'daylight',
  //   component: DaylightComponent,
  //   children: [
  //     {path: 'casual', component: CasualComponent},
  //     {path: 'dresses', component: DressesComponent},
  //     {path: 'school', component: SchoolComponent}
  //   ]
  // },
  // {
  //   path: 'moonlight',
  //   component: MoonlightComponent,
  //   children: [
  //     {path: 'disguises', component: DisguisesComponent},
  //     {path: 'battle-wear', component: UniformsComponent},
  //     {path: 'kingdom', component: KingdomComponent}
  //   ]
  // },
  // {
  //   path: 'accessories',
  //   component: AccessoriesComponent,
  //   children: [
  //     {path: 'jewelry', component: JewelryComponent},
  //     {path: 'shoes', component: ShoesComponent},
  //     {path: 'weapons', component: WeaponsComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
