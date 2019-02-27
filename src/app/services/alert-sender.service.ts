import { Injectable } from '@angular/core';
import {PlayGameService} from "./play-game.service";

@Injectable({
  providedIn: 'root'
})
export class AlertSenderService {



  private _actualTurnOwner:boolean;

  private _alertTypeList:any[];

  private _alertMainObject:Array<{id:number,type:string,content:string}> = [];

  private _alertViewMainObjectList:Array<{id:number,type:string,content:string}> = [];


  constructor(private pgs:PlayGameService) {

    this.initiateAlertDataListConversion;

  }

  addAlertInView(alertName:string){

    console.log("this.alertMainObject.length: "+this.alertTypeList.length);

    let x:number = 0;



    for(let aMO of this.alertMainObject){

      if(alertName == aMO.type){
        this.alertViewMainObjectList.push({
          id: x,
          type:aMO.type,
          content:aMO.content
        })
      }
      x++;
    }


  }

  /**
   * initialise la liste des mesages
   * @constructor
   */
  AlertMessagesArrays(){
    let Attship,DefShip;
    let pref = "The ";
    if(this.actualTurnOwner){
      Attship = pref+this.pgs.playerShipName;
      DefShip = pref+this.pgs.enemyShipName;
    }else{
      DefShip = pref+this.pgs.playerShipName;
      Attship = pref+this.pgs.enemyShipName;
    }

    this.alertTypeList = [
      ["spawn",Attship+" has spawned on the map"],
      ["start","The game is initialized"],
      ["end","The game is ended"],
      ["movement",Attship+" moved"],
      ["attack",Attship+" attacked"],
      ["gotHit",DefShip+" been hit"],
      ["missHit", "...and it missed"],
      ["turn","TURN OF "+Attship],
      ["defeat",Attship+" lost."],
      ["victory",Attship+" won."]
    ];


  }




  /**
   * Initialise la liste des messages dans un tableau d'objets
   */
  initiateAlertDataListConversion(){

    this.AlertMessagesArrays;

    console.log("this.alertMainObject.length: "+this.alertMainObject.length);
    for(let x=0;x < this.alertTypeList.length;x++){
      this.alertMainObject.push({
        id: x,
        type:this.alertTypeList[x][0],
        content:this.alertTypeList[x][1]
      })
    }
  }

  get alertTypeList(): any[] {
    return this._alertTypeList;
  }

  set alertTypeList(value: any[]) {
    this._alertTypeList = value;
  }


  get alertMainObject(): Array<{ id: number; type: string; content: string }> {
    return this._alertMainObject;
  }

  set alertMainObject(value: Array<{ id: number; type: string; content: string }>) {
    this._alertMainObject = value;
  }

  get alertViewMainObjectList(): Array<{ id: number; type: string; content: string }> {
    return this._alertViewMainObjectList;
  }

  set alertViewMainObjectList(value: Array<{ id: number; type: string; content: string }>) {
    this._alertViewMainObjectList = value;
  }

  get actualTurnOwner(): boolean {
    return this._actualTurnOwner;
  }

  set actualTurnOwner(value: boolean) {
    this._actualTurnOwner = value;
  }

}
