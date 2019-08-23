import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { RoutingIntroModule } from './routing-intro/routing-intro.module';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ViewModule,
    RoutingIntroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
