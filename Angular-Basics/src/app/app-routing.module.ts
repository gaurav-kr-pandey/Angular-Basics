import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing-intro/home/home.component';
import { SettingsComponent } from './routing-intro/settings/settings.component';
import { PageNotFoundComponent } from './routing-intro/page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './routing-intro/settings-profile/settings-profile.component';
import { SettingsContactComponent } from './routing-intro/settings-contact/settings-contact.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'settings',component:SettingsComponent,
  children:[
    {path:'',redirectTo:'profile',pathMatch:'full'},
    {path:'profile',component:SettingsProfileComponent},
    {path:'contact',component:SettingsContactComponent},
    {path:'**',component:SettingsProfileComponent}
    ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
