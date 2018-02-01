import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeekDetailsPage} from '../week-details/week-details';
//import{HomeServices} from './home.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weeks = [];
  
  constructor(private _navController: NavController) {

    //this.weeks = [{KW: "WK1", description: "Kalender Woche 1"}, {KW: "WK2", description: "Kalender Woche 2"}];
    //this.weeks = homeService.getWeeks();
    var i; 
    
    //Erstellt Array mit 52 Kalenderwochen
    for(i = 1;i<=52;i++) {

        this.weeks.push({ KW :"KW" + i.toString(), Day: "Tag XY"});
    }

  }
  showItem(week){
    //Neue Page wird geladen und die aktuelle week übergeben
    this._navController.push(WeekDetailsPage,{

      week: week
    });
  }
}
