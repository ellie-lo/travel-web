import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SectioncardComponent } from './sectioncard/sectioncard.component';
import { PlaceComponent } from './layout/component/place/place.component';
import { MainComponent } from './layout/component/main/main.component';
import { ArticlesComponent } from './layout/component/articles/articles.component';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchmoreComponent } from './layout/component/searchmore/searchmore.component';
import { CitydataService } from './citydata.service';
import { FilterdataPipe } from './filterdata.pipe';
import { GoogleMapsModule } from '@angular/google-maps';
import { ScenicSpotComponent } from './layout/component/ScenicSpot/ScenicSpot.component';
import { RestaurantComponent } from './layout/component/Restaurant/Restaurant.component';
import { ActivityComponent } from './layout/component/Activity/Activity.component';
import { HotelComponent } from './layout/component/Hotel/Hotel.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './network.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SectioncardComponent,
    PlaceComponent,
    MainComponent,
    ArticlesComponent,
    SearchmoreComponent,
    ScenicSpotComponent,
    RestaurantComponent,
    ActivityComponent,
    HotelComponent,
    FilterdataPipe,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    GoogleMapsModule,
    MatProgressSpinnerModule

  ],
  providers: [
    DataService,
    CitydataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
