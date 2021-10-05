import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { componentService } from '../../../componentService.service';
@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.scss']
})
export class Category2Component implements OnInit {

  constructor(public componentService: componentService, private router:Router ) { }

  ngOnInit(): void {
    this.componentService.getTips();
    this.componentService.setCategoryTips();
    this.router.navigate(["/alltips/category2"])
  }
  ngAfterViewChecked(){

  }

}
