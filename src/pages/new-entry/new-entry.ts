import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeekDetailsPage} from '../week-details/week-details'


@IonicPage()
@Component({
  selector: 'page-new-entry',
  templateUrl: 'new-entry.html',
})
export class NewEntryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  //weekday = "Montag";
  saveEntry(){
    //schiebt aktuelle page vom Stack 
    this.navCtrl.pop();
    console.log("Montag");
    //return this.weekday;
  }
}
