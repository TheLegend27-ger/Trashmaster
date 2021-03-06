import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { componentService } from '../../componentService.service';

@Component({
  selector: 'app-all-tips',
  templateUrl: './all-tips.component.html',
  styleUrls: ['./all-tips.component.scss'],
})
export class AllTipsComponent implements OnInit, OnDestroy {

  constructor(public componentService: componentService, public router:Router) { }
  rippleCentered = false
  rippleDisabled = false
  rippleUnbounded = false
  //#region ngOnInit
  ngOnInit(): void {
  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){

  }
  //#endregion

  //#region Navigation
  navigateToDestination(TipType:string){
    this.router.navigate(['/alltips/' + TipType])
  }
  //#endregion
}
