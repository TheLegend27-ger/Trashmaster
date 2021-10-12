import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { componentService } from '../componentService.service';
import { Router } from '@angular/router';
import { TipData } from 'src/app/models/tip.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isClicked1 = false;
  isClicked2 = false;
  isClicked3 = false;
  isClicked4 = false;

  constructor(public componentService: componentService, public router: Router) { }

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

      window.addEventListener("beforeunload", function(event) { event.returnValue = false });


  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){
    this.tipsSub.unsubscribe()
  }

  button_color_change(id:any){

    switch(id) {
      case "1": {
        this.isClicked1 = true
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = false
         break;
      }
      case "2": {
        this.isClicked1 = false
        this.isClicked2 = true
        this.isClicked3 = false
        this.isClicked4 = false
         break;
      }
      case "3": {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = true
        this.isClicked4 = false
         break;
      }
      case "4": {
        this.isClicked1 = false
        this.isClicked2 = false
        this.isClicked3 = false
        this.isClicked4 = true
         break;
      }
   }


  }
  //#endregion

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}


