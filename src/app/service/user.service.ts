import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/class/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public searchUser(cond){
    var users = [];
    this.http.post("http://localhost/ws/service.php/searchUser", cond ,{ responseType: 'json' }).subscribe((data) => {
      for (let x in data)
      {
        let user = new User();
        user.setUserId = +data[x]['userId'];
        user.setUserName = data[x]['username'];
        user.setFullName = data[x]['fullName'];
        user.setPosition = data[x]['position'];
        user.setDivnName = data[x]['divnName'];
        user.setStatus = data[x]['flag'];
        users.push(user);
      }
    });
    
    return users;
  }

  public getUserDetail(userId) 
  {
    var users = [];
    var user = new User();
    this.http.post("http://localhost/ws/service.php/getUserDetail", userId ,{ responseType: 'json' }).subscribe((data) => {
      
      //alert(data['userId'])
      user.setUserId = data['userId'];
      user.setUserName = data['username'];
      user.setFullName = data['fullName'];
      user.setPosition = data['position'];
      user.setDivnName = data['divnName'];
      user.setStatus = data['flag'];
      users.push(user);
    });
   
    return user;
   
  }
}
