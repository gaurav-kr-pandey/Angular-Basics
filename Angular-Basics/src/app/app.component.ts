import { Component } from '@angular/core';
import { User } from './address-card/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:User;
  clickExpandCollapse:Array<string>=['Excercise1','Excerscise2','Excerscise3','Excerscise4'];
  constructor(){
    this.user=new User();
    this.user.name="Gaurav Pandey ";
    this.user.designation="Software Engineer";
    this.user.address="Noida, Sector 70";
    this.user.phone=["+91-80******85","+91-70******79"];
  }

}
