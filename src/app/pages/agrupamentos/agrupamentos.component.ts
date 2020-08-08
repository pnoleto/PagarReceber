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

  public loading: boolean = false;
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

  public async OnSubmit() {
    try {
      this.loading = true;
      let mensagem: string;

      if (this.formAgroupamento.valid && this.agrupamento.Codigo > 0) {
        let request = await this.agrupamentosAPI.UpdateAgrupamento(this.agrupamento);
        mensagem = request.message;
      } else {
        let request = await this.agrupamentosAPI.InsertAgrupamento(this.agrupamento);
        mensagem = request.message;
      }

      alert(mensagem);
    }
    catch (error) {
      alert(error);
    }
    finally {
      this.loading = false;
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
