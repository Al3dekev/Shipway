import { Injectable } from '@angular/core';
import {PlateauService} from "./plateau.service";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  /**
   * selected true means, btn clicked by the player and ready to do the action
   */
  private _btnActionSelection: Array<{
    id: number,
    id_case:number,
    selected:boolean
  }> = [];

  constructor(private ps:PlateauService) { }


  doTeleport(ship:number){
    this.ps.plateauDynamicSize.forEach( obj =>{
      this.btnActionSelection.forEach(( obj2 =>{
        if(obj.status == ship){
          obj.status = 0
        }
        if(obj2.selected == true){

          if(obj.status == 4){
            obj.status = ship;
          }
        }
      }))
    })
  }

  doAttack(){

  }


  get btnActionSelection(): Array<{ id: number; id_case: number; selected: boolean }> {
    return this._btnActionSelection;
  }

  set btnActionSelection(value: Array<{ id: number; id_case: number; selected: boolean }>) {
    this._btnActionSelection = value;
  }
}


