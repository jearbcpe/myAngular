import { Component, OnInit , ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/class/user';
import { ElementRef } from '@angular/core';

import {NgForm} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

declare var jQuery:any;

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  @ViewChild('modalSaveUser', {static: false}) public modalSaveUser:ElementRef;
  @ViewChild('formUser', {static: false}) public formUser:NgForm;
  divisions;
  mode;
  userIdForEdit;

  fullName;
  position;
  divn;
  status;
  username;
  password;
  
  constructor(private masterService: MasterService,private userService: UserService) {}

  ngOnInit() {
    this.divisions = this.masterService.getDivn();
  }

  showModal(mode,userId = null){
    this.mode = mode;
    if(this.mode == "new"){
      this.formUser.resetForm();
      this.formUser.controls['divn'].setValue("0");
      this.formUser.controls['status'].setValue("0");

      jQuery(this.modalSaveUser.nativeElement).modal('show'); 
    }
    else if(this.mode == "edit"){
      this.formUser.resetForm();
      this.formUser.controls['divn'].setValue("0");
      this.formUser.controls['status'].setValue("0");
      this.initialUserData(userId);
      this.userIdForEdit = userId;
      
      jQuery(this.modalSaveUser.nativeElement).modal('show'); 
     
    }
   
  }

  initialUserData(userId)
  {
    //this.user = this.userService.getUserDetail(userId);
    
    this.userService.getUserDetailUnSubscribe(userId).subscribe((data)=>{
      this.fullName = data['fullName'];
      this.position = data['position'];
      this.divn = data['divnId'];
      this.status = (data['flag']=="1" ? "1" : "2");
      this.username = data['username'];
    });
    
    
  }

  onSubmitSave(formObject:NgForm){
    var user = new User();
    user.setFullName = formObject.value["fullName"];
    user.setPosition = formObject.value['position'];
    user.setDivnId = formObject.value['divn'];
    user.setStatus = (formObject.value['status']=="1" ? "1" : formObject.value['status']=="2" ? "0" : '');
    user.setUserName = formObject.value['username'];
    user.setPassword = formObject.value['password'];

    if(this.mode == "edit")  //for Edit
      user.setUserId = this.userIdForEdit; 
               
      

    if(this.mode == "new"){

      this.userService.saveUser(user,this.mode).subscribe((data)=> {
        if(data["status"]=="success"){
          alert("เพิ่มข้อมูลสำเร็จ");  
          jQuery(this.modalSaveUser.nativeElement).modal('hide');  
        }
        else if(data["status"]=="fail")
          alert("พบข้อผิดพลาด เพิ่มข้อมูลไม่สำเร็จ");  
          
       /* else if(data["status"]=="expired")
          alert("Session ของคุณหมดอายุ"); 
        */
      });

    }
    else if(this.mode == "edit"){

      this.userService.saveUser(user,this.mode).subscribe((data)=> {
        if(data["status"]=="success"){
          alert("แก้ไขข้อมูลสำเร็จ");  
          jQuery(this.modalSaveUser.nativeElement).modal('hide');  
        }
        else if(data["status"]=="fail")
          alert("พบข้อผิดพลาด แก้ไขข้อมูลไม่สำเร็จ");  
      });

    }


    
  }


}
