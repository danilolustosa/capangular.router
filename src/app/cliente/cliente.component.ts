import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    //console.log(form.value);
  }

  onSubmitProd(form: NgForm){
    console.log(form.value);
  }

  printNome(nome:string){
    console.log(nome);
  }

}
