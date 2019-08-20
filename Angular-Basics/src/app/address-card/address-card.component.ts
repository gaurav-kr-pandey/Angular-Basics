import { Component, OnInit, Input } from '@angular/core';
import {  User} from "./User.model";

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user:User;

  isCollapsed:boolean=false;
  expandCollapse:string="Expand";
  inputText:string="Random Text";

  toggleCollapse(){
    if(this.isCollapsed)
      this.expandCollapse="Expand";
    else
      this.expandCollapse="Collapse";

      this.isCollapsed=!this.isCollapsed;
  }

  ngOnInit() {}

}
