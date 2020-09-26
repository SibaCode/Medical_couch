import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cancel_url = environment.notify_url
  notify_url = environment.notify_url
  return_url = environment.return_url
  constructor() { }

  ngOnInit() {
  }

}
