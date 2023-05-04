import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  constructor() { }
  messagealt(){
    alert("Dependency Injection in Angular ");
  }
}
