import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { componentService } from '../../../componentService.service';
@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.scss']
})
export class Category3Component implements OnInit {

  constructor(public componentService: componentService, private router:Router ) { }

  ngOnInit(): void {
    this.componentService.getTips();
    this.componentService.setCategoryTips();
    this.router.navigate(["/alltips/category3"])
  }
  ngAfterViewChecked(){

  }

}
