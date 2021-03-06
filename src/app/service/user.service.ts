import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/class/user';
import { stringify } from 'querystring';
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
    var jsonData = { "userId":userId };
    var user = new User();
    this.http.post("http://localhost/ws/service.php/getUserDetail", jsonData ,{ responseType: 'json' }).subscribe((data) => {
        user.setUserId = data['userId'];
        user.setUserName = data['username'];
        user.setFullName = data['fullName'];
        user.setPosition = data['position'];
        user.setDivnName = data['divnName'];
        user.setDivnId = data['divnId'];
        user.setStatus = data['flag'];
      });
      return user;
  }

  public getUserDetailUnSubscribe(userId) 
  {
    var jsonData = { "userId":userId };
    return this.http.post("http://localhost/ws/service.php/getUserDetail", jsonData ,{ responseType: 'json' });  
  }

  public saveUser(userData:User,mode:string)
  {
    var jsonData = {  "fullName":userData.getFullName,
                      "position":userData.getPosition,
                      "divn":userData.getDivnId,
                      "status":userData.getStatus,
                      "username":userData.getUserName,
                      "password":userData.getPassword,
                      "userId" : userData.getUserId
                    };

    var strService:string;

    if(mode == "new")
        strService = "newUser";
    else if(mode == "edit")
        strService = "editUser";

    return this.http.post("http://localhost/ws/service.php/"+strService , JSON.stringify(jsonData) ,{ responseType: 'json' })
  }

  

}
