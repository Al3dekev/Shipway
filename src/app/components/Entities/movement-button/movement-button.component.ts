import { Component, OnInit } from '@angular/core';
import {ArrayEntity} from "../ArrayEntity";

@Component({
  selector: 'movement-btn',
  templateUrl: './movement-button.component.html',
  styleUrls: ['./movement-button.component.less']
})
export class MovementButtonComponent extends ArrayEntity implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.entityType = 3;
    this.checkSides();
  }

}
