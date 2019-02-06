import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  EnteringConfigMenu:boolean = true; //Normally FALSE
  startTheGame:boolean = false;

  shipName:string;
  shipColor:string;



  constructor() {

  }


  getEnteringConfigMenu(){
    return this.EnteringConfigMenu;
  }
  setEnteringConfigMenu(set){
    this.EnteringConfigMenu=set;
  }

  getStartTheGame(){
    return this.startTheGame;
  }
  setStartTheGame(set){
    this.startTheGame = set;
  }

  getShipName(){
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

}
