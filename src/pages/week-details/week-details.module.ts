import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekDetailsPage } from './week-details';

@NgModule({
  declarations: [
    WeekDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekDetailsPage),
  ],
})
export class WeekDetailsPageModule {}
