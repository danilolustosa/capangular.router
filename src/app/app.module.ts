import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
