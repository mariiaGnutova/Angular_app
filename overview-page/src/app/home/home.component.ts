import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobs = [];
  description ='';
  attachments = [];
  title = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
			this.jobs = data;  
    })  
    
  }
  showMore(job){
    var a = this.jobs["body"][0]["description"];
    console.log("first.job " + this.jobs["body"][0]["description"]);
    this.description = job["description"];
    this.attachments = job["attachments"];
    this.title = job["title"];
  }
  selectedId = 0;
  status: boolean = false;
  addShowClass(newId){
    this.selectedId = newId; 
  }
  

}
