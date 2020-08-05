import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { BreadCrumbItem, Carteira } from '../../classes';

@Component({
  selector: 'app-carteiras',
  templateUrl: './carteiras.component.html',
  styleUrls: ['./carteiras.component.scss']
})
export class CarteirasComponent implements OnInit {

  public formAgroupCarteira: FormGroup;
  public controls: { [key: string]: AbstractControl; };
  public Title: string = 'Cadastro de carteiras';
  public items: BreadCrumbItem[] = [
    { nome: 'Home', Ativo: false },
    { nome: 'Cadastros', Ativo: false },
    { nome: 'Carteiras', Ativo: true }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public OnSubmit() {
    if (this.formAgroupCarteira.valid)
      console.log(this.ObtemAgrupamento());
  }

  public PreencherCampos(agrupamento: Carteira) {
    this.controls.Codigo.setValue(agrupamento.Codigo);
    this.controls.Nome.setValue(agrupamento.Nome);
    this.controls.Ativo.setValue(agrupamento.Ativo);
  }

  public ObtemAgrupamento(): Carteira {
    let agrupamento = new Carteira();
    agrupamento.Nome = this.controls.Nome.value;
    agrupamento.Ativo = this.controls.Ativo.value;
    return agrupamento;
  }

  public FormBuilderCarteira(): void {
    this.formAgroupCarteira = this.formBuilder.group({
      Codigo: this.formBuilder.control(0),
      Nome: this.formBuilder.control('',
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(50)]
      ),
      Ativo: this.formBuilder.control(false)
    });
  }

  ngOnInit(): void {
    this.FormBuilderCarteira();
    this.controls = this.formAgroupCarteira.controls;

    this.PreencherCampos({ Codigo: 1, Nome: 'teste de preenchimento', InseridoEm:new Date, Ativo: true })
  }

}
