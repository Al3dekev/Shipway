import { Injectable } from '@angular/core';
import {PlayGameService} from "./play-game.service";

@Injectable({
  providedIn: 'root'
})
export class AlertSenderService {



  private _actualTurnOwner:number;

  private _alertTypeList:any[];

  private _alertMainObject:Array<{id:number,type:string,content:string}> = [];

  private _alertViewMainObjectList:Array<{id:number,type:string,content:string}> = [];


  constructor(private pgs:PlayGameService) {
    this.actualTurnOwner = 1;


  }

  addAlertInView(alertName:string){

    console.log("initiateAlertDataListConversion WORKS");


    console.log("AlertMessagesArrays WORKS");

    let Attship,DefShip;
    let pref = "The ";
    if(this._actualTurnOwner == 1){
      Attship = pref+this.pgs.playerShipName;
      DefShip = pref+this.pgs.enemyShipName;
    }else if(this._actualTurnOwner == 2){
      DefShip = pref+this.pgs.playerShipName;
      Attship = pref+this.pgs.enemyShipName;
    }else if(this._actualTurnOwner == 3){

    }

    this.alertTypeList = [
      ["spawn",pref+Attship+" has spawned on the map"],
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


    console.log("this.alertTypeList.length: "+this.alertTypeList.length);
    for(let x=0;x < this.alertTypeList.length;x++){
      this.alertMainObject.push({
        id: x,
        type:this.alertTypeList[x][0],
        content:this.alertTypeList[x][1]
      });
    }
    console.log("this.alertMainObject.length: "+this.alertMainObject.length);



    //Debut de addAlertInView
    console.log("this.alertTypeList.length: ");
    console.log(this.alertTypeList);

    let x:number = 0;

    console.log(this.alertMainObject);

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
   * Initialise la liste des messages dans un tableau d'objets
   */
  initiateAlertDataListConversion(){
    console.log("initiateAlertDataListConversion WORKS");
    this.AlertMessagesArrays;

    console.log("this.alertTypeList.length: "+this.alertTypeList.length);
    for(let x=0;x < this.alertTypeList.length;x++){
      this.alertMainObject.push({
        id: x,
        type:this.alertTypeList[x][0],
        content:this.alertTypeList[x][1]
      });
    }
    console.log("this.alertMainObject.length: "+this.alertMainObject.length);
  }



  /**
   * initialise la liste des mesages
   *
   */
  AlertMessagesArrays(){

    console.log("AlertMessagesArrays WORKS");

    let Attship,DefShip;
    let pref = "The ";
    if(this._actualTurnOwner == 1){
      Attship = pref+this.pgs.playerShipName;
      DefShip = pref+this.pgs.enemyShipName;
    }else if(this._actualTurnOwner == 2){
      DefShip = pref+this.pgs.playerShipName;
      Attship = pref+this.pgs.enemyShipName;
    }else if(this._actualTurnOwner == 3){

    }

    this.alertTypeList = [
      ["spawn",pref+Attship+" has spawned on the map"],
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

  get actualTurnOwner(): number {
    return this._actualTurnOwner;
  }

  set actualTurnOwner(value: number) {
    this._actualTurnOwner = value;
  }
}
