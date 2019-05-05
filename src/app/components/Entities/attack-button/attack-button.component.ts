import { Component, OnInit } from '@angular/core';
import {ArrayEntity} from "../ArrayEntity";

@Component({
  selector: 'attack-btn',
  templateUrl: './attack-button.component.html',
  styleUrls: ['./attack-button.component.less']
})
export class AttackButtonComponent extends ArrayEntity implements OnInit {

  constructor() {
    super();
  }





  ngOnInit() {
    this.entityType = 4;
    this.checkSides();
  }

}
