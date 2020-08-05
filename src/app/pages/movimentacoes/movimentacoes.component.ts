import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import DataSource from "devextreme/data/data_source";
import { BreadCrumbItem, Movimentacao } from '../../classes';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.scss'],
})
export class MovimentacoesComponent implements OnInit {

  public dtMovimentacao: DataSource;
  public formAgroupMovimentacao: FormGroup;
  public controls: { [key: string]: AbstractControl; };
  public Title: string = 'Movimentações';
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

  public PreencherCampos(movimentacao: Movimentacao) {
    this.controls.Codigo.setValue(movimentacao.Codigo);
    this.controls.CodAgrupamento.setValue(movimentacao.CodAgrupamento);
    this.controls.CodCarteira.setValue(movimentacao.CodigoCarteira);
    this.controls.Descricao.setValue(movimentacao.Descricao);
    this.controls.DataMovimentacao.setValue(movimentacao.DataMovimentacao);
    this.controls.Valor.setValue(movimentacao.Valor);
    this.controls.Pago.setValue(movimentacao.Pago);
  }

  public ObtemMovimentacao(): Movimentacao {
    let movimentacao = new Movimentacao();
    movimentacao.Codigo = this.controls.Codigo.value;
    movimentacao.CodAgrupamento = this.controls.CodAgrupamento.value;
    movimentacao.CodigoCarteira = this.controls.CodigoCarteira.value;
    movimentacao.Descricao = this.controls.Descricao.value;
    movimentacao.DataMovimentacao = this.controls.DataMovimentacao.value;
    movimentacao.Pago = this.controls.Pago.value;
    return movimentacao;
  }

  public FormBuilderMovimentacao(): void {
    this.formAgroupMovimentacao = this.formBuilder.group({
      Codigo: this.formBuilder.control(null, [Validators.required]),
      CodAgrupamento: this.formBuilder.control(null, [Validators.required]),
      CodCarteira: this.formBuilder.control(null, [Validators.required]),
      DataMovimentacao: this.formBuilder.control(null, [Validators.required]),
      Descricao: this.formBuilder.control(null,
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(50)]
      ),
      Valor: this.formBuilder.control(null, [Validators.required]),
      Pago: this.formBuilder.control(false, [Validators.required])
    });
  }

  public ngOnInit(): void {
    this.FormBuilderMovimentacao();
    this.controls = this.formAgroupMovimentacao.controls;

    this.PreencherCampos({
      Codigo: 1,
      CodigoCarteira: 0,
      CodAgrupamento: 0,
      DataMovimentacao: new Date(),
      Descricao: 'teste de preenchimento',
      InseridoEm :new Date,
      Valor: 0.0,
      Pago: true
    })
  }

}
