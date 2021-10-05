import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { componentService } from '../../../componentService.service';
@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.scss']
})
export class Category4Component implements OnInit {

  constructor(public componentService: componentService, private router:Router ) { }

  ngOnInit(): void {
    this.componentService.getTips();
    this.componentService.setCategoryTips();
    this.router.navigate(["/alltips/category4"])
  }

}
