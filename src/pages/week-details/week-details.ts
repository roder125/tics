import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewEntryPage} from '../new-entry/new-entry'

/**
  Neue Pages müssen in der app.module.ts importiert und 
  in den declarations und entryComponents Komponenten deklariert werden
 */
@IonicPage()
@Component({
  selector: 'page-week-details',
  templateUrl: 'week-details.html',
  providers: [NewEntryPage]
})
export class WeekDetailsPage {

  selectedWeek: any;
  entry:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedWeek = navParams.get("week");  
  }

  //newEntry : NewEntryPage;
  //weekday = this.newEntry.saveEntry();
    
  addClick(){
    this.navCtrl.push(NewEntryPage,{

          });

  }

  getEntry(entry){
    this.entry = entry;
  }
}
