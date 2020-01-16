import { Component, OnInit , ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @ViewChild('myModal', {static: false}) public modalComjDetail:ElementRef;
  userId;
  constructor() { }

  ngOnInit() {
  }

  showModal(userId)
  {
    jQuery(this.modalComjDetail.nativeElement).modal('show'); 
    this.userId = userId;
  }

}
