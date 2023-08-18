import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { PlantItemComponent } from './components/plant-item/plant-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PlantListPageComponent } from './pages/plant-list-page/plant-list-page.component';
import { PlantDetailPageComponent } from './pages/plant-detail-page/plant-detail-page.component';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PlantsListComponent,
    PlantItemComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PlantListPageComponent,
    PlantDetailPageComponent,
    FavouritesPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
