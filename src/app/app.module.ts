import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MaterialModule } from './material-design/material-design.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HistoryPageModule } from './pages/history/history.module';
//import { TimelinePage } from './components/timeline/timeline.page';

@NgModule({
  declarations: [AppComponent], //HistoryPageModule, TimelinePage],
  entryComponents:[], //[AppComponent, HistoryPageModule],
  imports: [BrowserModule, MaterialModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
