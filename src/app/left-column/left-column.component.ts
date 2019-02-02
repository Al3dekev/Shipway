import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.less']
})
export class LeftColumnComponent implements OnInit {

  GameTitle:String;
  MenuButtons:String[];
  GameConfStatSel:Number=1;

  constructor() { }


  playGame(){

  };


  getGameTitle(){
    return this.GameTitle;
  }
  setGameTitle(set){
    this.GameTitle = set;
  }

  getMenuButtons(){
    return this.MenuButtons;
  }
  setMenuButtons(set){
    this.MenuButtons = set;
  }

  getGameConfStatSel(){
    return this.GameConfStatSel;
  }
  setGameConfStatSel(set){
    this.GameConfStatSel=set;
  }



  ngOnInit() {
  }

}
