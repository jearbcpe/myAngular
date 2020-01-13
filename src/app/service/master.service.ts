import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  public getDivn(){
    var divisions = [];
    
    this.http.get("http://localhost/ws/service.php/divisions").subscribe((data) => {
      for (let x in data)
      {
        divisions.push
        ({
          "divnId" : data[x]['divnId'],
          "divnName" : data[x]['divnName']
        });
      }
    });
    
    return divisions;
  }

}
