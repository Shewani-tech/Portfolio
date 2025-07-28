import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private API = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(data: any) {
    return this.http.post(this.API, data);
  }
}
