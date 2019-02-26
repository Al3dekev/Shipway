import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertSenderService {


private _alertTypeEvent:string[];

  private _actualTurnOwner:boolean;



  constructor() {
  }


  addAlertTypeEvent(typeToAdd:string){
    this.alertTypeEvent.push(typeToAdd);

  }


  get alertTypeEvent(): string[] {
    return this._alertTypeEvent;
  }

  set alertTypeEvent(value: string[]) {
    this._alertTypeEvent = value;
  }

  get actualTurnOwner(): boolean {
    return this._actualTurnOwner;
  }

  set actualTurnOwner(value: boolean) {
    this._actualTurnOwner = value;
  }

}
