import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//
//import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CdkTableModule,
    //MatStepperModule,
    //MatIconModule,
],
  exports: [
    BrowserAnimationsModule,

    CdkTableModule,
    //MatStepperModule,
    //MatIconModule,
],

})
export class MaterialModule {}