import {Component, OnInit, Renderer2} from '@angular/core';
import {IpcService} from "../../services/ipc.service";
import {PlayGameService} from "../../services/play-game.service";
//import {appendChild} from "@angular/core/src/render3/node_manipulation";


@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.less']
})
export class LeftColumnComponent implements OnInit {

  GameTitle:String;
  MenuButtons:String[];

  constructor(private readonly _ipc: IpcService, private pgs:PlayGameService, private rend:Renderer2) {

  }


  playGame(){


    this.pgs.setEnteringConfigMenu(true);

/*// voir pour ajout dans une methode séparé
    /!*if(this.pgs.getEnteringConfigMenu()){*!/
    document.createElement("div").setAttribute("id","LeftColumnWhenGameConfigEnabled");
    let div = document.querySelector("#LeftColumnWhenGameConfigEnabled");
      let LeftCol = document.querySelector(".leftColumn");
      let mainApp = document.querySelector(".mainAppClass");

      //let addedMainApp = docuent.body.appendChild(mainApp);m
      this.rend.appendChild(mainApp,div);
      //this.rend.appendChild(div,LeftCol);

    /!*}else{

    }*!/*/


   /* let mainAppClass = document.querySelector("div.mainAppClass");
   /* let gameConfig = document.createElement("app-game-configuration");
    mainAppClass.appendChild(gameConfig);*/
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


  ngOnInit() {
  }

}
