import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticeService } from '../../../services/practice.service';
import { Review, ReviewResponse } from '../../../models/review';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  p_id : any ;
  reviews: Review[] ;
  star: number = null ; 
  comment: string ;
isStar = false ;
  isComment: boolean = false;
  constructor(public activeRoute: ActivatedRoute, private practiceS: PracticeService) {
    this.activeRoute.params.subscribe( (param) => {
      this.p_id = param['id']
      console.log(param['id'])
    }); 

    this.getReviews()
   }

  ngOnInit() {
  }

  getReviews() {
    this.practiceS.getReviews(this.p_id).subscribe((res: ReviewResponse) => {
        this.reviews = res.data ;
    })
  }


  rating(star){
    this.star = star ;
  
  }

  addReview(){

    if(this.star === null){
      this.isStar = true ;
    }else {
      this.isStar = false;
    }

    if(this.comment === undefined || this.comment.length === 0){
      this.isComment = true ;
    }else{
      this.isComment = false ;
    }

    console.log(this.comment);
    
  }
}
