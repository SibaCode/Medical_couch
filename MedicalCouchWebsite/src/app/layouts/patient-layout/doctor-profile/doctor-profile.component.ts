import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PracticeService } from '../../../services/practice.service';
import { Review, ReviewResponse } from '../../../models/review';
import { Practice, PracticeResponse } from '../../../models/practice';

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
  practice: Practice ; 
  constructor(public activeRoute: ActivatedRoute, private practiceS: PracticeService) {
    this.activeRoute.params.subscribe( (param) => {
      this.p_id = param['id']
      console.log(param['id'])
    }); 

    this.getReviews() ; 
    this.getSingle() 
   }

  ngOnInit() {

  }

  getReviews() {
    this.practiceS.getReviews(this.p_id).subscribe((res: ReviewResponse) => {
        this.reviews = res.data ;
            this.reviews.filter((r) => {
              
      console.log(r.p_id === this.p_id ? true: false);
   })
    });


  }


  rating(star){
    this.star = star ;
  
  }


  getSingle() {
    this.practiceS.getSinglePractrice(this.p_id).subscribe((res:PracticeResponse) => {
      this.practice = res.data[0] ;
    })
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

    let review = {
      star: this.star,
      coment: this.comment,
      practice_id: this.p_id  
    }

    this.practiceS.addReview(review).subscribe( (res) => {
      console.log(res)
    })
    
  }
}
