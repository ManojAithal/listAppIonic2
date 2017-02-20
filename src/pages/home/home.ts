import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HTTP } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // items=[
  //   {title:'text 1'},
  //   {title:'text 2'},
  //   {title:'text 3'},
  //   {title:'text 4'},
  //   {title:'text 5'},
  //   {title:'text 6'},
  //   {title:'text 7'},
  //   {title:'text 8'},
  //   {title:'text 9'}
  // ];

  items

  constructor(public navCtrl: NavController) {

    HTTP.get('https://api.randomuser.me/?results=10',{},{}).then((data)=>{

        // this.items=JSON.parse(data['_body']).results;
        // alert(data.data.resulits); 
        
        this.items=JSON.parse(data.data).results;
        alert(this.items);
    }).catch(error=>{

    })

  }

  removeItem(event,item){

     alert(item.name.first);

  }




}
