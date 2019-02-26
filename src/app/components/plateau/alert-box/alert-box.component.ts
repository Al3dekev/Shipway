import { Component, OnInit } from '@angular/core';
import {AlertSenderService} from "../../../services/alert-sender.service";
import {PlayGameService} from "../../../services/play-game.service";

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.less']
})
export class AlertBoxComponent implements OnInit {

  private _alertTypeList:Array<string>[] = [
    ["spawn","contenue spawn"],
    ["start","content"],
    ["movement","content"],
    ["attack","content"],
    ["gotHit","content"],
    ["turn","content"],
    ["defeat","content"],
    ["victory","content"]
  ];

  private _alertMainObject:Array<{id:number,type:string,content:string}> = [];

  private _alertViewMainObjectList:Array<{id:number,type:string,content:string}> = [];



// voir ou ça nous mene


  constructor(private ats:AlertSenderService, private pgs:PlayGameService) {
    this.initiateAlertDataListConversion();
  }

  addAlertInView(alertName:string){
    let ship;
    if(this.ats.actualTurnOwner){
      ship = this.pgs.playerShipName;
    }else{
      ship = this.pgs.enemyShipName;
    }
    console.log("this.alertMainObject.length: "+this.alertMainObject.length);
    for(let x=0;x < this.alertMainObject.length;x++){
      if(alertName == this.alertTypeList[x][0]){
        this.alertMainObject.push({
          id: x,
          type:this.alertTypeList[x][0],
          content:ship+this.alertTypeList[x][1]
        })
      }
    }
  }



/*  addAlertMessage(type:string){
    this.alertTypeList.forEach(obj =>{
      if(obj)
    })
  }*/

  initiateAlertDataListConversion(){
      console.log("this.alertMainObject.length: "+this.alertMainObject.length);
    for(let x=0;x < this.alertMainObject.length;x++){
      this.alertMainObject.push({
        id: x,
        type:this.alertTypeList[x][0],
        content:this.alertTypeList[x][1]
      })
    }
  }

  get alertTypeList(): Array<string>[] {
    return this._alertTypeList;
  }

  set alertTypeList(value: Array<string>[]) {
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


  ngOnInit() {
  }

}
