import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private alert:AlertController, private router: Router) { }

  ngOnInit() {
  }

logout()
{
  this.alert.create({
    header:"Confirm!",
    subHeader:"Are you sure?",
    buttons:[{
      text:"Cancel",
      handler:(data)=>{
        this.router.navigate(['home/account'])
      }
    },
    {
      text:"OK",
      handler:(data)=>{
        this.router.navigate([''])
      }
    }
  ]
  }).then((confirmElement)=>{
    confirmElement.present();
  })
}

}
