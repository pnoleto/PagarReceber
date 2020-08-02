import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumbItem } from '../../../Classes';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() public items: BreadCrumbItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
