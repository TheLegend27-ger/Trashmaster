import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { componentService } from '../componentService.service';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent implements OnInit, OnDestroy {
  //erstellt lokale Instanz des Service in der Component
  constructor(public componentService: componentService) { }

  //Subscription zum Überwachen von Komponentenänderungen
  //private appwrapperSub: Subscription

  //#region ngOnInit
  ngOnInit(): void {
    /* this.appwrapperSub = this.componentService.appwrapperUpdateListener()
    .subscribe((users: UserData[])=>{
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator= this.paginator
      this.dataSource.sort = this.sort
    });
    */
  }
  //#endregion

  //#region ngOnDestroy
  ngOnDestroy(){

  }
  //#endregion

}
