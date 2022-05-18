import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserArrrayService {

  constructor() { }

  users = [
    { id: 1, name: "Mg Mg", email: "mgmg@gmail.com", gender: "male", team: "PHP", hobby: ["reading"], dob: new Date(1995, 11, 17), created_at: new Date(), description: "Hola Hola" },
    { id: 2, name: "Aung Aung", email: "aungaung@gmail.com", gender: "male", team: "PHP", hobby: ["gaming"], dob:new Date(1995, 11, 17), created_at: new Date(),description: "Hello Hello" },
    { id: 3, name: "Ma Ma", email: "mama@gmail.com", gender: "memale", team: "Java", hobby: ["gaiming"], dob: new Date(1995, 11, 17), created_at: new Date(), description: "He He" },
  ];

  getUsers() {
    return this.users;
  }

  getSingleUser(id: number) {
    return this.users.filter(user => user.id === id);
  }
}
