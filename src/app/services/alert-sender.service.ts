import {Injectable, OnInit} from '@angular/core';
import {ShipService} from "./ship.service";
import {TurnService} from "./turn.service";

@Injectable({
  providedIn: 'root'
})
export class AlertSenderService{


  private _alertTypeList:any[];

  private _PlayerShipAlertList:Array<{
    id:number,
    id_turnOwner:number,
    type:string,
    content:string
  }> = [];

  private _EnemyShipAlertList:Array<{
    id:number,
    id_turnOwner:number,
    type:string,
    content:string
  }> = [];


  private _alertMainListView:Array<{
    id:number,
    id_turnOwner:number,
    type:string,
    content:string
  }> = [];


  constructor(private ss:ShipService, private ts:TurnService) {
    this.generateAlerts();

  }

  /**
   * Ajouter un parametre tour dans alertViewMainObjectList pour la gestion de l'affichage des tours
   * @param alertName
   */
  addAlertInView(id_owner:number,alertName:string){

    console.log("initialisation de 'addAlertInView()'");
    console.log(this.alertTypeList);


    if(id_owner == this.ts.PlayerShipTurn){

      this.PlayerShipAlertList.forEach(obj =>{
        if(obj.id_turnOwner == id_owner && obj.type == alertName){
          this.alertMainListView.push({
            id: obj.id,
            id_turnOwner:obj.id_turnOwner,
            type:obj.type,
            content:obj.content
          })
        }
      });

    } if(id_owner == this.ts.EnemyShipTurn){

      this.EnemyShipAlertList.forEach(obj =>{
        if(obj.id_turnOwner == id_owner && obj.type == alertName){
          this.alertMainListView.push({
            id: obj.id,
            id_turnOwner:obj.id_turnOwner,
            type:obj.type,
            content:obj.content
          })
        }
      });

    }





  } //addAlertInView



  /**
   * Génère les alertes
   */
  generateAlerts() {

    console.log("initialisation de 'generateAlerts()'");

    let Attship, DefShip;
    let pref = "The ";

    if (this.ts.PlayerShipTurn == 1) {
      Attship = pref + this.ss.playerShipName;
      DefShip = pref + this.ss.enemyShipName;


      this._alertTypeList = [
        ["spawn", Attship + " has spawned on the map"],//1: type | 2:
        ["start", "The game is initialized"],
        ["end", "The game is ended"],
        ["movement", Attship + " moved"],
        ["attack", Attship + " attacked"],
        ["gotHit", DefShip + " has been hit... successfully"],
        ["missHit", DefShip + " has been hit... and it missed"],
        ["turn", "TURN OF " + Attship],
        ["defeat", Attship + " lost."],
        ["victory", Attship + " won."]
      ];


      console.log("_alertTypeList.length: " + this._alertTypeList.length);
      for (let x = 0; x < this._alertTypeList.length; x++) {
        this.PlayerShipAlertList.push({
          id_turnOwner: this.ts.PlayerShipTurn,
          id: x,
          type: this._alertTypeList[x][0],
          content: this._alertTypeList[x][1]
        });
      }


    } else if (this.ts.EnemyShipTurn == 2) {
      DefShip = pref + this.ss.playerShipName;
      Attship = pref + this.ss.enemyShipName;


      this._alertTypeList = [
        ["spawn", Attship + " has spawned on the map"],//1: type | 2:
        ["start", "The game is initialized"],
        ["end", "The game is ended"],
        ["movement", Attship + " moved"],
        ["attack", Attship + " attacked"],
        ["gotHit", DefShip + " has been hit... successfully"],
        ["missHit", DefShip + " has been hit... and it missed"],
        ["turn", "TURN OF " + Attship],
        ["defeat", Attship + " lost."],
        ["victory", Attship + " won."]
      ];


      console.log("_alertTypeList.length: " + this._alertTypeList.length);
      for (let x = 0; x < this._alertTypeList.length; x++) {
        this.EnemyShipAlertList.push({
          id_turnOwner: this.ts.EnemyShipTurn,
          id: x,
          type: this._alertTypeList[x][0],
          content: this._alertTypeList[x][1]
        });
      }

    } // end Else If

  }


  get alertTypeList(): any[] {
    return this._alertTypeList;
  }

  set alertTypeList(value: any[]) {
    this._alertTypeList = value;
  }

  get PlayerShipAlertList(): Array<{ id: number; id_turnOwner: number; type: string; content: string }> {
    return this._PlayerShipAlertList;
  }

  set PlayerShipAlertList(value: Array<{ id: number; id_turnOwner: number; type: string; content: string }>) {
    this._PlayerShipAlertList = value;
  }

  get EnemyShipAlertList(): Array<{ id: number; id_turnOwner: number; type: string; content: string }> {
    return this._EnemyShipAlertList;
  }

  set EnemyShipAlertList(value: Array<{ id: number; id_turnOwner: number; type: string; content: string }>) {
    this._EnemyShipAlertList = value;
  }

  get alertMainListView(): Array<{ id: number; id_turnOwner: number; type: string; content: string }> {
    return this._alertMainListView;
  }

  set alertMainListView(value: Array<{ id: number; id_turnOwner: number; type: string; content: string }>) {
    this._alertMainListView = value;
  }




}
