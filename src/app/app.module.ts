import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";

import { LeftColumnComponent } from './components/left-column/left-column.component';
import { GameConfigurationComponent } from './components/game-configuration/game-configuration.component';
import { GameStartedComponent } from './components/game-started/game-started.component';
import { GamePlateauComponent } from './components/game-plateau/game-plateau.component';
import { PlayerShipComponent } from './components/player-ship/player-ship.component';
import { EnemyShipComponent } from './components/enemy-ship/enemy-ship.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftColumnComponent,
    GameConfigurationComponent,
    GameStartedComponent,
    GamePlateauComponent,
    PlayerShipComponent,
    EnemyShipComponent,
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
    MatToolbarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
