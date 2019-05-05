import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import{MatRadioButton,MatRadioButtonBase,MatRadioChange,MatRadioGroup,MatRadioModule} from "@angular/material";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {ScrollingModule,ScrollDispatchModule} from '@angular/cdk/scrolling';

import { LeftColumnComponent } from './components/Main/left-column/left-column.component';
import { GameConfigurationComponent } from './components/Main/game-configuration/game-configuration.component';

import { PlayerShipComponent } from './components/Entities/player-ship/player-ship.component';
import { EnemyShipComponent } from './components/Entities/enemy-ship/enemy-ship.component';

import {IpcService} from "./services/ipc.service";
import { GameStartedComponent } from './components/plateau/game-started/game-started.component';
import { PlateauComponent } from './components/plateau/plateau/plateau.component';
import { AlertBoxComponent } from './components/plateau/alert-box/alert-box.component';
import { ActionBoxComponent } from './components/Entities/action-box/action-box.component';
import { ModalPauseMenuComponent } from './components/Main/modal-pause-menu/modal-pause-menu.component';
import { MovementButtonComponent } from './components/Entities/movement-button/movement-button.component';
import { AttackButtonComponent } from './components/Entities/attack-button/attack-button.component';
import {StartGameService} from "./services/start-game.service";
import {ShipService} from "./services/ship.service";
import {PlateauService} from "./services/plateau.service";
import {TurnService} from "./services/turn.service";
import {ServiceLocator} from "./services/locator.service";

@NgModule({
  declarations: [
    AppComponent,
    LeftColumnComponent,
    GameConfigurationComponent,
    PlayerShipComponent,
    EnemyShipComponent,
    GameStartedComponent,
    PlateauComponent,
    AlertBoxComponent,
    ActionBoxComponent,
    ModalPauseMenuComponent,
    MovementButtonComponent,
    AttackButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    ScrollingModule
  ],
  providers: [
    StartGameService,
    ShipService,
    PlateauService,
    TurnService,
    IpcService,
    ServiceLocator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
