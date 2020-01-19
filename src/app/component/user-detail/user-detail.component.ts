import { Component, OnInit , ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/class/user';
declare var jQuery:any;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @ViewChild('modalUserDetail', {static: false}) public modalComjDetail:ElementRef;
  // = Array();
  user:User;
  //fullName : string = "";
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

   showModal(userId){
    this.user = this.userService.getUserDetail(JSON.stringify({"userId" : userId}));
    jQuery(this.modalComjDetail.nativeElement).modal('show'); 
  }

}
