import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BreadCrumbItem, Agrupamento } from '../../Classes';

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
      Codigo: this.formBuilder.control(0),
      Nome: this.formBuilder.control('',
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(50)]
      ),
      Ativo: this.formBuilder.control(false)
    });
  }

  public OnSubmit() {
    if (this.formAgrupamento.valid)
      console.log(this.ObtemAgrupamento());
  }

  public PreencherCampos(agrupamento: Agrupamento) {
    this.controls.Codigo.setValue(agrupamento.Codigo);
    this.controls.Nome.setValue(agrupamento.Nome);
    this.controls.Ativo.setValue(agrupamento.Ativo);
  }

  public ObtemAgrupamento(): Agrupamento {
    let agrupamento = new Agrupamento();
    agrupamento.Nome = this.controls.Nome.value;
    agrupamento.Ativo = this.controls.Ativo.value;
    return agrupamento;
  }

  ngOnInit(): void {
    this.FormBuilderAgrupamento();
    this.controls = this.formAgrupamento.controls;

    this.PreencherCampos({ Codigo: 1, Nome: 'teste de preenchimento', Ativo: true })
  }
}
