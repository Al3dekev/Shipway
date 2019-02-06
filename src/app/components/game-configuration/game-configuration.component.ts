import { Component, OnInit } from '@angular/core';

import{ PlayGameService} from "../../services/play-game.service";
import {FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.less']
})
export class GameConfigurationComponent implements OnInit {




  private _shipName:string="Normandy";
  private _shipColor:string;
  private _colorType1:string="#6fdbd5";
  private _colorType2:string="#dd71bf";

  gameForm = new FormGroup({
    shipName: new FormControl(this.shipName),
    shipColor: new FormControl(this.colorType1),
    //Remplacer vars de la classe par celles du formcontrol
  });


  constructor(private pgs:PlayGameService) {

  }


  BackButton(){
    this.pgs.setEnteringConfigMenu(false);
  }

  startGameBtn(){
    //DEV TEST
    console.log(this.shipColor);
    console.log(this.shipName);

    //PROD MODE
    /*this.pgs.setEnteringConfigMenu(false);
    this.pgs.setStartTheGame(true);

    this.pgs.setShipColor(this.shipColor);
    this.pgs.setShipname(this.shipName);*/

  }

  clickTestColor(){
    console.log(this.shipColor);
  }

  get shipName(): string {
    return this._shipName;
  }

  set shipName(value: string) {
    this._shipName = value;
  }

  get shipColor(): string {
    return this._shipColor;
  }

  set shipColor(value: string) {
    this._shipColor = value;
  }

  get colorType1(): string {
    return this._colorType1;
  }

  set colorType1(value: string) {
    this._colorType1 = value;
  }
  get colorType2(): string {
    return this._colorType2;
  }
  set colorType2(value: string) {
    this._colorType2 = value;
  }

/*  getShipName(){
    return this.shipName;
  }
  setShipname(set){
    this.shipName=set;
  }

  getShipColor(){
    return this.shipColor;
  }
  setShipColor(set){
    this.shipColor=set;
  }

  getColorType1(){
    return this.colorType1;
  }
  setColorType1(set){
    this.colorType1=set;
  }*/

  ngOnInit() {
  }

}
