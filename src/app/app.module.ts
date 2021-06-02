import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNameComponent } from './input-name/input-name.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTelefoneComponent } from './input-telefone/input-telefone.component';
import { InputSenhaComponent } from './input-senha/input-senha.component';
import { BotaoComponent } from './botao/botao.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputNameComponent,
    InputEmailComponent,
    InputTelefoneComponent,
    InputSenhaComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
