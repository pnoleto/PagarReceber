import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BreadCrumbItem } from '../../Classes';

@Component({
  selector: 'app-agrupamentos',
  templateUrl: './agrupamentos.component.html',
  styleUrls: ['./agrupamentos.component.scss']
})
export class AgrupamentosComponent implements OnInit {

  public formAgrupamento: FormGroup;
  public controls: { [key: string]: AbstractControl; };
  public Title: string = 'Cadastro de agrupamentos';
  public items: BreadCrumbItem[] = [
    { nome: 'Home', Ativo: false },
    { nome: 'Cadastros', Ativo: false },
    { nome: 'Agrupamentos', Ativo: true }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public FormBuilderAgrupamento(): void {
    this.formAgrupamento = this.formBuilder.group({
      Nome: this.formBuilder.control('',
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(50)]
      ),
      Ativo: this.formBuilder.control(false)
    });
  }

  public OnSubmit() {
    console.log(this.formAgrupamento.controls.Nome.errors);
  }

  ngOnInit(): void {
    this.FormBuilderAgrupamento();
    this.controls = this.formAgrupamento.controls;
  }
}
