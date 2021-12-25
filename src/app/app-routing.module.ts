import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './layout/component/place/place.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from "./layout/component/main/main.component";
import { ArticlesComponent } from "./layout/component/articles/articles.component";
import { SearchmoreComponent } from './layout/component/searchmore/searchmore.component';
import { ScenicSpotComponent } from './layout/component/ScenicSpot/ScenicSpot.component';
import { RestaurantComponent } from './layout/component/Restaurant/Restaurant.component';
import { ActivityComponent } from './layout/component/Activity/Activity.component';
import { HotelComponent } from './layout/component/Hotel/Hotel.component';
const routes: Routes = [
    {
    path: '',component: LayoutComponent, children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'ScenicSpot/:name', component: ScenicSpotComponent },
      { path: 'Restaurant/:name', component: RestaurantComponent },
      { path: 'Activity/:name', component: ActivityComponent },
      { path: 'Hotel/:name', component: HotelComponent },
      { path: 'place/:type/:text', component: PlaceComponent },
      { path: 'articles/:type/:ID', component: ArticlesComponent },
      { path: 'searchmore/:name/:type', component: SearchmoreComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
