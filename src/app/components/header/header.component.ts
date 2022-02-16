import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';
import {  ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { TipData } from 'src/app/models/tip.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(public componentService: componentService, public route: ActivatedRoute, public router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { this.checkVisibility()}
    });
  }
  isClicked1 = false;
  isClicked2 = false;
  isClicked3 = false;
  isClicked4 = false;
  isClicked5 = false;
  rippleCentered = true
  rippleDisabled = false
  rippleUnbounded = false


  @Input() tips: TipData[] = [];
  dataSource!: MatTableDataSource<TipData>
  private tipsSub: Subscription = new Subscription();
  //#region ngOnInit
  ngOnInit(): void {
    this.componentService.getTips();
    this.tipsSub = this.componentService
      .getTipsUpdateListener()
      .subscribe((tips: TipData[]) => {
        this.tips = tips;
        this.dataSource = new MatTableDataSource(this.tips);
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
        setTimeout(() => {
          //this.isLoading = false;
        }, 1);
      });
      this.componentService.setSearchbarVisibility(true)
      window.addEventListener("beforeunload", function(event) { event.returnValue = false });
      this.checkVisibility();

  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){
    this.tipsSub.unsubscribe()
  }

  button_color_change(id:any){
    switch(id) {
      case "0": {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = false
        this.isClicked5 = false
        this.componentService.setOrigin('/')
         break;
      }
      case "1": {
        this.isClicked1 = true
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = false
        this.isClicked5 = false
        this.componentService.setOrigin('/alltips')
         break;
      }
      case "2": {
        this.isClicked1 = false
        this.isClicked2 = true
        this.isClicked3 = false
        this.isClicked4 = false
        this.isClicked5 = false
        this.componentService.setOrigin('/questionnaire')
         break;
      }
      case "3": {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = true
        this.isClicked4 = false
        this.isClicked5 = false
        this.componentService.setOrigin('/quiz')
         break;
      }
      case "4": {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = true
        this.isClicked5 = false
        this.componentService.setOrigin('/forum')
         break;
      }
      case "5": {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = false
        this.isClicked5 = true
        this.componentService.setOrigin('/data')
         break;
      }
   }
    this.componentService.setSearchbarVisibility(true)
    this.checkVisibility();

  }
  //#endregion

  applyFilter(event: Event) {
    this.router.navigate(['/alltips/' + (event.target as HTMLInputElement).value])
    this.isClicked1 = false
    this.isClicked2 = false
    this.isClicked3 = false
    this.isClicked4 = false
    this.isClicked5 = false
    this.componentService.setSearchbarVisibility(false)
    this.checkVisibility();
  }
  hasNoKeyword = this.componentService.getSearchbarVisibility();
  checkVisibility(){
    this.hasNoKeyword = this.componentService.getSearchbarVisibility()
    console.log("check" + this.hasNoKeyword)
  }


}


