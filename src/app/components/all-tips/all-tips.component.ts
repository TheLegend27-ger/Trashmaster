import { Component, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';

@Component({
  selector: 'app-all-tips',
  templateUrl: './all-tips.component.html',
  styleUrls: ['./all-tips.component.scss']
})
export class AllTipsComponent implements OnInit, OnDestroy {

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
