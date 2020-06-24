import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {AlertController} from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

@ViewChild('stepper', { static: false }) stepper: MatStepperModule;

isLinear = false;
  detailsFormGroup: FormGroup;
  ledFormGroup: FormGroup;
  fleetFormGroup: FormGroup;
  passengerFormGroup: FormGroup;
  cctvFormGroup: FormGroup;
  fcsFormGroup: FormGroup;

  
  //status for submit 
  status: string="";
  constructor(private _formBuilder: FormBuilder, private alert:AlertController, private router: Router) {}

  ngOnInit() {
    this.detailsFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      id: ['', [Validators.required, Validators.maxLength(100)]],
      busNo: ['', [Validators.required, Validators.maxLength(100)]],
      busModel: ['', [Validators.required, Validators.maxLength(100)]],
      order: ['', [Validators.required, Validators.maxLength(100)]],
      timeStart: ['', [Validators.required, Validators.maxLength(100)]],
      timeCompleted: ['', [Validators.required, Validators.maxLength(100)]]
    });
    this.ledFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fleetFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.passengerFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.cctvFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.fcsFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
  }

//detailsForm
get name(){
  return this.detailsFormGroup.get('name');
}
get id(){
  return this.detailsFormGroup.get('id');
}
get busNo(){
  return this.detailsFormGroup.get('busNo');
}
get busModel(){
  return this.detailsFormGroup.get('busModel');
}
get order(){
  return this.detailsFormGroup.get('order');
}
get timeStart(){
  return this.detailsFormGroup.get('timeStart');
}
get timeCompleted(){
  return this.detailsFormGroup.get('timeCompleted');
}

public errorMessages = {
  name:[
    {type: 'required', message: 'Name is required'},
    {type: 'maxlength', message: 'Name cant be longer than 100 character'}
  ],
  id:[
    {type: 'required', message: 'ID is required'},
    {type: 'maxlength', message: 'Please enter valid ID'}
  ],
  busNo:[
    {type: 'required', message: 'Bus Number is required'},
    {type: 'maxlength', message: 'Bus Number cant be longer than 100 character'}
  ],
  busModel:[
    {type: 'required', message: 'Bus Model is required'},
    {type: 'maxlength', message: 'Bus Model cant be longer than 100 character'}
  ],
  order:[
    {type: 'required', message: 'Order is required'},
    {type: 'maxlength', message: 'Order cant be longer than 100 character'}
  ],
  timeStart:[
    {type: 'required', message: 'Start Time is required'},
    {type: 'maxlength', message: 'Please enter valid start time'}
  ],
  timeCompleted:[
    {type: 'required', message: 'Completed Time is required'},
    {type: 'maxlength', message: 'Please enter valid completed time'}
  ]
};

  

   
//submit button
OpenConfirmDialogue()
{
  this.alert.create({
    header:"Confirm!",
    subHeader:"Are you sure?",
    buttons:[{
      text:"Cancel",
      handler:(data)=>{
        this.router.navigate(['home/forms'])
      }
    },
    {
      text:"OK",
      handler:(data)=>{
        this.router.navigate(['home'])
      }
    }
  ]
  }).then((confirmElement)=>{
    confirmElement.present();
  })
}

}
