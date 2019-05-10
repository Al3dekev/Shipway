import { Component, OnInit } from '@angular/core';
import {ArrayEntity} from "../ArrayEntity";
import {ActionService} from "../../../services/action.service";

@Component({
  selector: 'movement-btn',
  templateUrl: './movement-button.component.html',
  styleUrls: ['./movement-button.component.less']
})
export class MovementButtonComponent extends ArrayEntity implements OnInit {

  constructor(private ActS:ActionService) {
    super();
  }


  clickOnBtn(){

    this.ActS.btnActionSelection.forEach( obj =>{
      if(obj.id_case == this.id_case){
        obj.selected = true;
      }
    })

  }

  ngOnInit() {
    this.entityType = 3;
    this.checkSides();
  }

}
