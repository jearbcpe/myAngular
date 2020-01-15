import { Component, OnInit , ViewChild } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { TbUserComponent } from '../tb-user/tb-user.component';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(TbUserComponent,{static: false}) tbUser: TbUserComponent ; 
  searchForm
  divisions;
  cond;
  name : string = "";
  constructor(private masterService: MasterService,private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      name: '',
      divn: '0',
      flag: '0'
    });
  }

  ngOnInit() {
    this.divisions = this.masterService.getDivn();
  }

  onSubmitSearch(searchData){
    this.tbUser.searchUser(JSON.stringify(searchData));
  }

}
