import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService) { }
  Items;
  ngOnInit() {
    this.apiService.getImage().subscribe((resp: any) => {
      console.log(resp);
      this.Items = resp;

    });
  }
}
