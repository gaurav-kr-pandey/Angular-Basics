import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  name:String="";
  response:any;

  constructor(private testService:TestServiceService,private http:HttpClient) { 
    testService.printToConsole("Testing demo service");
  }

 
  search() {
    if (this.name!=null && this.name!=undefined && this.name!= "") {
      let obs = this.http.get('https://api.github.com/users/' + this.name);
      obs.subscribe((res) => {
        this.response = res;
        console.log(res);
      });
    }else{
      console.log("Please! Provide a valid git user");
    }
  }

}
