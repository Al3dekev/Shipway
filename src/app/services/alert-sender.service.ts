import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertSenderService {


private _alertTypeEvent:string[];



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


}
