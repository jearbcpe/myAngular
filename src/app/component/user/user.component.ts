import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  divisions;
  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.divisions = this.masterService.getDivn();
  }



}
