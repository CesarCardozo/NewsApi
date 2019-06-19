import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsApiService } from './services/news-api.service';
import { HttpClientModule } from '@angular/common/http';
import { NoticiaPageModule } from './noticia/noticia.module';
import { NoticiaPage } from './noticia/noticia.page';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [NoticiaPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, NoticiaPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NewsApiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }