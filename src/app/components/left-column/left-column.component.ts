import { Component, OnInit } from '@angular/core';
import {IpcService} from "../../services/ipc.service";
import {PlayGameService} from "../../services/play-game.service";

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.less']
})
export class LeftColumnComponent implements OnInit {

  GameTitle:String;
  MenuButtons:String[];
  EnteringConfigMenuLc:boolean=false;

  constructor(private readonly _ipc: IpcService, private pgs:PlayGameService) {

  }


  playGame(){

    this.setEnteringConfigMenuLc(true);

    this.pgs.setEnteringConfigMenu(this.getEnteringConfigMenuLc());

    this.checkIfInsideConfigMenu();
  console.log(this.EnteringConfigMenuLc)

/*    let mainAppClass = document.querySelector("div.mainAppClass");
    let gameConfig = document.createElement("app-game-configuration");
    mainAppClass.appendChild(gameConfig);*/
  };

  leaveGame(){
    this._ipc.send('close-app');
  };

  checkIfInsideConfigMenu(){
/*    if(this.pgs.getEnteringConfigMenu()){

    }else{

    }*/
  }

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


  getEnteringConfigMenuLc(){
    return this.EnteringConfigMenuLc;
  }
  setEnteringConfigMenuLc(set){
    this.EnteringConfigMenuLc=set;
  }


  ngOnInit() {
  }

}
