import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  getCurrentDate:Date;
  currentDate:String;
  currentTime:String;
  constructor() {
    
    setInterval(()=>{
      this.getCurrentDate=new Date();
      this.currentDate=this.getCurrentDate.toLocaleDateString();
      this.currentTime=this.getCurrentDate.toLocaleTimeString();
    },1000);
   }

  ngOnInit() {
  }

}
