import { Component, OnInit,ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  @ViewChild('verifyModal', {static: false}) public modalVerify:ElementRef;

  constructor(private authen : AuthenService,private router: Router) { }

  public txtUsername : string = "";
  public txtPassword : string = "";
  ngOnInit() {
    this.txtUsername = "";
    this.txtPassword = "";
  }

  public loginDialog(){
    jQuery(this.modalVerify.nativeElement).modal('show'); 
  }

  public onVerify()
  {
     //Verify User
     this.authen.verifyUser(this.txtUsername,this.txtPassword)
     .subscribe((data)=>{
         if(data["status"]=="success"){
           jQuery(this.modalVerify.nativeElement).modal('hide'); 
           localStorage.setItem("token", data['token']);
           localStorage.setItem("fullName", data['fullName']); 
           window.location.reload();
         }
         else if(data["status"]=="fail")
         {
           alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
         }
     });    
  }

}
