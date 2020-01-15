import { Component, OnInit , Input , EventEmitter } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-tb-user',
  templateUrl: './tb-user.component.html',
  styleUrls: ['./tb-user.component.css']
})
export class TbUserComponent implements OnInit {

  users;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  searchUser(cond){
    this.users = this.userService.searchUser(cond);
  }

}
