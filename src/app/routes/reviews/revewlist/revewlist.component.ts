import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service';
import {review} from '../../../review';


@Component({
  selector: 'reviewlist',
  templateUrl: './revewlist.component.html',
  styleUrls: ['./revewlist.component.css']
})
export class RevewlistComponent implements OnInit {
  reviews;
  constructor(private rs:ReviewService) { 
    rs.getReviews
    ().subscribe(
      (data)=>{this.reviews=data},()=>{alert("Something went wrong");}
    );
  }

  ngOnInit() {
  }

}
