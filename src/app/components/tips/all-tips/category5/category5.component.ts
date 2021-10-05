import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { componentService } from '../../../componentService.service';
@Component({
  selector: 'app-category5',
  templateUrl: './category5.component.html',
  styleUrls: ['./category5.component.scss']
})
export class Category5Component implements OnInit {

  constructor(public componentService: componentService, private router:Router ) { }

  ngOnInit(): void {
    this.componentService.getTips();
    this.componentService.setCategoryTips();
    this.router.navigate(["/alltips/category5"])
  }

}
