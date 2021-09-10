import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(public componentService: componentService) { }

  //#region ngOnInit
  ngOnInit(): void {
  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){

  }
  //#endregion

}
