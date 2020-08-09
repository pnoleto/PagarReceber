import { Component, OnInit } from '@angular/core';
import { formatPercent } from '@angular/common';
import { BreadCrumbItem, movimentacoesPeriodo } from '../../classes';
import { MovimentacoesAPIService } from '../../services';

export class Population {
  arg: number;
  val: number;
}

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.scss']
})
export class MovimentacoesComponent implements OnInit {

  public loading: boolean = false;
  public Title: string = 'Movimentações';
  public items: BreadCrumbItem[] = [
    { nome: 'Home', Ativo: false },
    { nome: 'Movimentações', Ativo: true }
  ]

  constructor(
    private movimentacoesApi: MovimentacoesAPIService
  ) { }

  public customizeTooltip(arg: any): { text: string } {
    return {
      text: `${arg.valueText} - ${formatPercent(arg.percent, "en-US")}`
    };
  }

  public ObtemMovimentacoesDoPeriodo() {

  }

  public ngOnInit(): void {
  }

  populationData: Population[] = [
    {
      arg: 1970,
      val: 3691172616
    }, {
      arg: 1980,
      val: 4449048798
    }, {
      arg: 1990,
      val: 5320816667
    }, {
      arg: 2000,
      val: 6127700428
    }, {
      arg: 2010,
      val: 6916183482
    }];

  populationByRegions: movimentacoesPeriodo[] = [
    {
      agrupamento: "Casa",
      valor: 1500.00
    }, {
      agrupamento: "Carro",
      valor: 270.00
    }, {
      agrupamento: "Lazer",
      valor: 1000.00
    }, {
      agrupamento: "Viagens",
      valor: 800.00
    }, {
      agrupamento: "Conta de luz",
      valor: 150.00
    }, {
      agrupamento: "Internet",
      valor: 120.00
    }];

}
