import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ViacepService} from "../service/ViacepService";
import {ViaCepModel} from "../model/ViaCepModel";

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  viacepForm = this.formBuilder.group({
    cep: ''
    });

  constructor(private formBuilder: FormBuilder,private viaCepService:ViacepService) {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    var cep = this.viacepForm.value;
    this.viaCepService.getEndereco(cep.cep).pipe().subscribe((viacep:ViaCepModel)=>{
      console.log(viacep)
    });
  }
}
