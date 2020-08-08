import { Component, OnInit } from '@angular/core';
import { BreadCrumbItem } from '../../classes';

export class MaleAgeStructure {
  state: string;
  young: number;
  middle: number;
  older: number;
}

export class PopulationByRegion {
  region: string;
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

  customizeTooltip(arg: any) {
    return {
      text: arg.seriesName + ' years: ' + arg.valueText
    };
  }

  maleAgeData: MaleAgeStructure[] = [{
    state: "2019",
    young: 6.7,
    middle: 28.6,
    older: 5.1
  }, {
    state: "2020",
    young: 9.6,
    middle: 43.4,
    older: 9
  }, {
    state: "2021",
    young: 13.5,
    middle: 49,
    older: 5.8
  }, {
    state: "2022",
    young: 30,
    middle: 90.3,
    older: 14.5
  }];

  populationByRegions: PopulationByRegion[] = [{
    region: "Casa",
    val: 4119626293
  }, {
    region: "Carro",
    val: 1012956064
  }, {
    region: "Lazer",
    val: 344124520
  }, {
    region: "Viagens",
    val: 590946440
  }, {
    region: "Conta de luz",
    val: 727082222
  }, {
    region: "Internet",
    val: 35104756
  }];

  customizeTooltip1(arg: any) {
    return {
      text: arg.valueText + " - " + arg.percent
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
