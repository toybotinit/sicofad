import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Formato2Service {

  constructor(private http: HttpClient) { }
}
