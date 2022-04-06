import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  key = "z5pO31JwTxfGhC5Bn3ntsiyPZCHdgJdyDFP8HWT-8Bs";
  page = 1;
  per_page = 21;
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}`
    );
  }

  constructor(private httpClient: HttpClient) {

    
  }
}


