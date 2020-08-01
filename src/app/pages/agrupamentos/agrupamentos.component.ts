import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-agrupamentos',
  templateUrl: './agrupamentos.component.html',
  styleUrls: ['./agrupamentos.component.scss']
})
export class AgrupamentosComponent implements OnInit {

  public formAgrupamento: FormGroup;
  public controls: { [key: string]: AbstractControl; };

  constructor(private formBuilder: FormBuilder) { formBuilder }

  public FormBuilderAgrupamento(): void {
    this.formAgrupamento = this.formBuilder.group({
      Nome: this.formBuilder.control('', [Validators.required,Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(50)]),
      Ativo: this.formBuilder.control(false)
    });
  }

  public OnSubmit() {
    alert("ok");
    console.log(this.formAgrupamento.controls.Nome.errors);
    
  }

  ngOnInit(): void {
    this.FormBuilderAgrupamento();
    this.controls = this.formAgrupamento.controls;
  }
}
