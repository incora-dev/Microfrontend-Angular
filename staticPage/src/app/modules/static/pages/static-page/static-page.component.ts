import { Component, OnInit } from '@angular/core';
import { NgxCommonUiLibService } from 'ngx-common-ui-lib';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {

  constructor(private service: NgxCommonUiLibService) {
    service.print();
  }

  ngOnInit(): void {
  }

}
