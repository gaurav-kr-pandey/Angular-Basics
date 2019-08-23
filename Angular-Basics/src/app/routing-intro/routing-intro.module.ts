import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [HomeComponent, SettingsComponent, PageNotFoundComponent, SettingsProfileComponent, SettingsContactComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HomeComponent,SettingsComponent]
})
export class RoutingIntroModule { }
