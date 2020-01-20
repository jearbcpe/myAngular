import { Component, OnInit , ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/class/user';
import { ElementRef } from '@angular/core';

import {NgForm} from '@angular/forms';

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
  //password;
  //rePassword;
  constructor(private masterService: MasterService,private userService: UserService) {}

  ngOnInit() {
    this.divisions = this.masterService.getDivn();
  }

  showModal(mode){
    this.mode = mode;
    this.formUser.resetForm();
    this.formUser.controls['divn'].setValue("0");
    this.formUser.controls['status'].setValue("0");
    jQuery(this.modalSaveUser.nativeElement).modal('show'); 
  }

  onSubmitSave(formObject:NgForm){
    var user = new User();
    user.setFullName = formObject.value["fullName"];
    user.setPosition = formObject.value['position'];
    user.setDivnId = formObject.value['divn'];
    user.setStatus = (formObject.value['status']=="1" ? "1" : formObject.value['status']=="2" ? "0" : '');
    user.setUserName = formObject.value['username'];
    user.setPassword = formObject.value['password'];


      this.userService.newUser(user).subscribe((data)=> {
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

}
