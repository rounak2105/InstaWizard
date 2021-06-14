import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseURL = 'http://localhost:6069/';
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;  
  }

  sendAndVerifyOTP(mail) {
    return this.httpClient.get(this.baseURL + 'otp/' + mail);
  }

  orderLikesForUser(link) {
    return this.httpClient.post(this.baseURL + 'likes', link);
  }


}
