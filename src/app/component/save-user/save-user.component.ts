import { Component, OnInit , ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { UserService } from '../../service/user.service';
import { ElementRef } from '@angular/core';

import { FormBuilder } from '@angular/forms';

declare var jQuery:any;

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  @ViewChild('modalSaveUser', {static: false}) public modalSaveUser:ElementRef;
  saveUserForm;
  divisions;
  constructor(private masterService: MasterService,private userService: UserService,private formBuilder: FormBuilder) { 

    this.saveUserForm = this.formBuilder.group({
      fullName: '',
      position: '',
      divn: '0',
      status: '0',
      username: '',
      password: '',
      rePassword: ''
    });

  }

  ngOnInit() {
    this.divisions = this.masterService.getDivn();
  }

  showModal(){
    jQuery(this.modalSaveUser.nativeElement).modal('show');  
    this.saveUserForm = this.formBuilder.group({
      fullName: '',
      position: '',
      divn: '0',
      status: '0',
      username: '',
      password: '',
      rePassword: ''
    });
  }

  onSubmitSave(userData){
    this.userService.newUser(JSON.stringify(userData)).subscribe((data)=> {
      
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
