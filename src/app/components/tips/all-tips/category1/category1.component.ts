import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TipData } from 'src/app/models/tip.model';
import { componentService } from '../../../componentService.service';
@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit {

  private tipsSub: Subscription = new Subscription();
  public tips!: TipData[];
  constructor(public componentService: componentService, public router:Router ) { }

  ngOnInit(): void {
    //this.componentService.getTips();
    this.tipsSub = this.componentService
      .getTipsUpdateListener()
      .subscribe((tips: TipData[]) => {
        this.tips = tips;
      });
    this.componentService.setCategoryTips();
    //this.router.navigate(["/alltips/category1"])
  }
  ngAfterViewChecked(){

  }

}
