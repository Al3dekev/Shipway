import {Component, OnInit, Renderer2} from '@angular/core';
import {IpcService} from "../../services/ipc.service";
import {PlayGameService} from "../../services/play-game.service";
import {StartGameService} from "../../services/start-game.service";
//import {appendChild} from "@angular/core/src/render3/node_manipulation";


@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.less']
})
export class LeftColumnComponent implements OnInit {

  private _GameTitle:string;
  private _MenuButtons:string[];



  constructor(private readonly _ipc: IpcService, public sgs:StartGameService, private rend:Renderer2) {

  }


  playGame(){


    this.sgs.EnteringConfigMenu = true;

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

  leftColumnStyleStateInConfig(){
    if(this.sgs.EnteringConfigMenu){
      return {
        "filter":"blur(4px)",
        "pointer-events": "none",
        "user-select": "none"
      }
    }
  }

  get GameTitle(): string {
    return this._GameTitle;
  }

  set GameTitle(value: string) {
    this._GameTitle = value;
  }

  get MenuButtons(): string[] {
    return this._MenuButtons;
  }

  set MenuButtons(value: string[]) {
    this._MenuButtons = value;
  }


  ngOnInit() {
  }

}
