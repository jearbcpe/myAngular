import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private httpClient: HttpClient) { }

  public verifyToken()
  {
    var webApi = "http://localhost/ws/service.php/verifyToken";
    var jsonData = {"token" : localStorage.getItem("token")}
    return this.httpClient.post(webApi, jsonData ,{ responseType: 'json' });
  }

  public verifyUser(username:string,password:string)
  {
    var webApi = "http://localhost/ws/service.php/verifyUser";
    var jsonData = { "username" : username,"password" : password }
    return this.httpClient.post(webApi, jsonData ,{ responseType: 'json' });
  }

  public logout()
  {
    var webApi = "http://localhost/ws/service.php/logout";
    var jsonData = {"token" : localStorage.getItem("token")}
    return this.httpClient.post(webApi, jsonData ,{ responseType: 'json' });
  }

}
