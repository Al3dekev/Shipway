import { Component, OnInit } from '@angular/core';
import {IpcService} from "../../services/ipc.service";

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.less']
})
export class LeftColumnComponent implements OnInit {

  GameTitle:String;
  MenuButtons:String[];
  GameConfStatSel:Number=1;

  constructor(private readonly _ipc: IpcService) {

  }


  playGame(){
    console.log("ça marche");
  };

  leaveGame(){
    this._ipc.send('close-app');
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

/*  getIpc(){
    return this.ipc;
  }
  setIpc(set){
    this.ipc=set;
  }*/


  ngOnInit() {
  }

}
