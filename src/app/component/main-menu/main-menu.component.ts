import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/service/authen.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private authen : AuthenService,private router: Router) { }
  fullName;
  ngOnInit() {
    this.fullName = localStorage.getItem("fullName");
  }

  public onLogout()
  {
    if(confirm("ยืนยันการออกจากระบบ"))
    {
      this.authen.logout()
      .subscribe((data)=>{
        if(data["status"]=="success"){
          this.fullName = "";
          localStorage.removeItem('fullName');
          this.router.navigate(['/']);
        }
      });    
    }
  }

}
