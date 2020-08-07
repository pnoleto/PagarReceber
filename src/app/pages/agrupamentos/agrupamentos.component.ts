import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { BreadCrumbItem, Agrupamento } from '../../classes';
import { AgrupamentoApiService } from '../../services';

@Component({
  selector: 'app-agrupamentos',
  templateUrl: './agrupamentos.component.html',
  styleUrls: ['./agrupamentos.component.scss'],
  providers: [Agrupamento]
})
export class AgrupamentosComponent implements OnInit {

  public formAgroupamento: FormGroup;
  public controls: { [key: string]: AbstractControl; };
  public Title: string = 'Cadastro de agrupamentos';
  public items: BreadCrumbItem[] = [
    { nome: 'Home', Ativo: false },
    { nome: 'Cadastros', Ativo: false },
    { nome: 'Agrupamentos', Ativo: true }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private agrupamento: Agrupamento,
    private agrupamentosAPI: AgrupamentoApiService
  ) { }

  public FormBuilderAgrupamento(): void {
    this.formAgroupamento = this.formBuilder.group({
      Codigo: this.formBuilder.control(0),
      Nome: this.formBuilder.control('',
        [Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.maxLength(50)]
      ),
      Ativo: this.formBuilder.control(false)
    });
  }

  public async CadastraAgrupamento() {
    try {
      const retorno = await this.agrupamentosAPI.InsertAgrupamento(this.ObtemAgrupamento());
      alert(retorno.message);
    } catch (error) {
      alert(error);
    }
  }

  public async AtualizaAgrupamento() {
    try {
      const retorno = await this.agrupamentosAPI.UpdateAgrupamento(this.ObtemAgrupamento());
      alert(retorno.message);
    } catch (error) {
      alert(error);
    }
  }



  public OnSubmit() {
    if (this.formAgroupamento.valid) {
      if (this.agrupamento.Codigo > 0)
        this.AtualizaAgrupamento();
      else
        this.CadastraAgrupamento();
    }
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
    this.controls = this.formAgroupamento.controls;

    this.PreencherCampos({ Codigo: 1, Nome: 'teste de preenchimento', InseridoEm: new Date, Ativo: true })
  }
}
