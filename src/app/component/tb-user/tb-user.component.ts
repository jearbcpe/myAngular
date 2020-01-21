import { Component, OnInit , ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { SaveUserComponent } from '../save-user/save-user.component';
import { User } from 'src/app/class/user';
@Component({
  selector: 'app-tb-user',
  templateUrl: './tb-user.component.html',
  styleUrls: ['./tb-user.component.css']
})
export class TbUserComponent implements OnInit {

  @ViewChild(UserDetailComponent ,{static: false}) modalUserDetail :UserDetailComponent;
  @ViewChild(SaveUserComponent ,{static: false}) saveUserComponent : SaveUserComponent;
  userList:Array<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchUser(cond){
    this.userList = this.userService.searchUser(cond);
    
  }
  
  showDetailModal(userId)
  {
    this.modalUserDetail.showModal(userId);
  }

  showModalEditUser(userId){
    this.saveUserComponent.showModal("edit",userId);
  }

}
