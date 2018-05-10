import { Injectable } from '@angular/core';
import {course} from '../course';

@Injectable()
export class CourseService {
 courses:course[];
  constructor() {
    this.courses=[
      {
      image:"angular.png",
      name:"Angular 4",
      price:20000,
      description :"A Component based  client application framework"
      },

      {
        image:"c#.jpg",
        name:"C#.net",
        price:10000,
        description :"Microsoft Develoment technogy"
      },

        {
          image:"java.png",
          name:"Java",
          price:15000,
          description :"Develepment technology"
        }
    ]
   }
   
 getCourses():course[]
 {
   return this.courses;
 }
}
