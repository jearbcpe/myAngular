import { Component, OnInit , ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { TbUserComponent } from '../tb-user/tb-user.component';
import { SaveUserComponent } from '../save-user/save-user.component';
import { AuthenService } from 'src/app/service/authen.service';
import { VerifyComponent } from '../verify/verify.component';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(VerifyComponent ,{static: false}) modalVerify : VerifyComponent;
  @ViewChild(TbUserComponent,{static: false}) tbUser: TbUserComponent ; 
  @ViewChild(SaveUserComponent ,{static: false}) saveUserComponent : SaveUserComponent;

  searchForm;
  divisions;
  cond;
  name : string = "";
  constructor(
    private masterService: MasterService,
    private formBuilder: FormBuilder,
    private authen : AuthenService
    ) { 
    this.searchForm = this.formBuilder.group({
      name: '',
      divn: '0',
      flag: '0'
    });
  }

  ngOnInit() {
    this.divisions = this.masterService.getDivn();
    //Check Authen
    this.authen.verifyToken()
    .subscribe((data)=>{
        if(data["status"]=="expired"){
            this.modalVerify.loginDialog();
        }
    });      
  }

  onSubmitSearch(searchData){
    this.tbUser.searchUser(JSON.stringify(searchData));
  }

  showModalNewComj()
  {
    this.saveUserComponent.showModal('new');
  }

}
