import { Component, OnInit , ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-tb-user',
  templateUrl: './tb-user.component.html',
  styleUrls: ['./tb-user.component.css']
})
export class TbUserComponent implements OnInit {

  @ViewChild(UserDetailComponent ,{static: false}) public modalUserDetail;
  users;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchUser(cond){
    this.users = this.userService.searchUser(cond);
  }
  
  showDetailModal(userId)
  {
    this.modalUserDetail.showModal(userId);
  }

}
