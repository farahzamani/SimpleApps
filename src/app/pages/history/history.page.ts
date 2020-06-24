import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expand(){
    var x=0;
    console.log("expand");
    if(x==0){
      document.getElementById("menu").style.transform="scale(3)";
      document.getElementById("plus").style.transform="rotate(45deg)";
      x=1;
    }
    else{
      document.getElementById("menu").style.transform="scale(0)";
      document.getElementById("plus").style.transform="rotate(0deg)";
      x=0;
    }
  }

  expand2(){
    var x=0;
    console.log("expand2");
    if(x==0){
      document.getElementById("menu2").style.transform="scale(3)";
      document.getElementById("plus2").style.transform="rotate(45deg)";
      x=1;
    }
    else{
      document.getElementById("menu2").style.transform="scale(0)";
      document.getElementById("plus2").style.transform="rotate(0deg)";
      x=0;
    }
  }

  expand3(){
    var x=0;
    console.log("expand3");
    if(x==0){
      document.getElementById("menu3").style.transform="scale(3)";
      document.getElementById("plus3").style.transform="rotate(45deg)";
      x=1;
    }
    else{
      document.getElementById("menu3").style.transform="scale(0)";
      document.getElementById("plus3").style.transform="rotate(0deg)";
      x=0;
    }
  }

}
