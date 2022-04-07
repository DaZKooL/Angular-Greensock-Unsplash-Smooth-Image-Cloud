import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import 'gsap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService) { }
  Items;

  selectImage = (e) => {
  console.log (e)
  e.target.parentNode.classList.toggle('active')
  }
  ngOnInit() {
    this.apiService.getImage().subscribe((resp: any) => {
      console.log(resp);
      this.Items = resp;
      // 

    });
  }
}
