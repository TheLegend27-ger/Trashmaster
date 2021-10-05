import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { componentService } from '../../../componentService.service';
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit {


  constructor(public componentService: componentService, private router:Router ) { }

  ngOnInit(): void {
    this.componentService.getTips();
    this.componentService.setCategoryTips();
    this.router.navigate(["/alltips/category1"])
  }
  ngAfterViewChecked(){

  }

}
