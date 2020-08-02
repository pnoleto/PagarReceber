import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BreadCrumbItem, Carteira } from '../../Classes';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.scss']
})
export class MovimentacoesComponent implements OnInit {

  public formAgroupMovimentacao: FormGroup;
  public controls: { [key: string]: AbstractControl; };
  public Title: string = 'Cadastro de Movimentações';
  public items: BreadCrumbItem[] = [
    { nome: 'Home', Ativo: false },
    { nome: 'Movimentações', Ativo: true }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public OnSubmit() {
    if (this.formAgroupMovimentacao.valid)
      console.log(this.ObtemMovimentacao());
  }

  public PreencherCampos(agrupamento: Carteira) {
    this.controls.Codigo.setValue(agrupamento.Codigo);
    this.controls.Nome.setValue(agrupamento.Nome);
    this.controls.Ativo.setValue(agrupamento.Ativo);
  }

  public ObtemMovimentacao(): Carteira {
    let agrupamento = new Carteira();
    agrupamento.Nome = this.controls.Nome.value;
    agrupamento.Ativo = this.controls.Ativo.value;
    return agrupamento;
  }

  public FormBuilderMovimentacao(): void {
    this.formAgroupMovimentacao = this.formBuilder.group({
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
    this.FormBuilderMovimentacao();
    this.controls = this.formAgroupMovimentacao.controls;

    this.PreencherCampos({ Codigo: 1, Nome: 'teste de preenchimento', Ativo: true })
  }

}
