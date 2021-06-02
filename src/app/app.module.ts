import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNameComponent } from './input-name/input-name.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTelefoneComponent } from './input-telefone/input-telefone.component';
import { InputSenhaComponent } from './input-senha/input-senha.component';
import { BotaoComponent } from './botao/botao.component';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    InputNameComponent,
    InputEmailComponent,
    InputTelefoneComponent,
    InputSenhaComponent,
    BotaoComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
