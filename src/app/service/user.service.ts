import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
        users.push({
          "userId" : data[x]['userId'],
          "username" : data[x]['username'],
          "fullName" : data[x]['fullName'],
          "position" : data[x]['position'],
          "divnName" : data[x]['divnName'],
          "flag" : data[x]['flag'],
        });
      }
    });
    
    return users;
  }
}
