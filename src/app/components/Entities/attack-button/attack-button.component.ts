import { Component, OnInit } from '@angular/core';
import {ArrayEntity} from "../ArrayEntity";
import {ActionService} from "../../../services/action.service";

@Component({
  selector: 'attack-btn',
  templateUrl: './attack-button.component.html',
  styleUrls: ['./attack-button.component.less']
})
export class AttackButtonComponent extends ArrayEntity implements OnInit {

  constructor(private actS:ActionService) {
    super();
  }


    clickOnBtn(){

    this.actS.btnActionSelection.forEach( obj =>{
      if(obj.id_case == this.id_case){
        obj.selected = true;
      }
    })



    }


  ngOnInit() {
    this.entityType = 4;
    this.checkSides();
  }

}
