import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TipData } from 'src/app/models/tip.model';
import { componentService } from '../../componentService.service';

@Component({
  selector: 'app-one-tip',
  templateUrl: './one-tip.component.html',
  styleUrls: ['./one-tip.component.scss']
})
export class OneTipComponent implements OnInit {
  title  = 3;
  constructor(public componentService: componentService, public route: ActivatedRoute) {}
  private mode = "alltips";
  private tipType: any;
  tip: TipData={
    id: '',
    Title: '',
    Text: 'Lurch',
    TipType: '',
    ImageBase64: ''
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("TipType")) {
        this.mode = "alltips";
        this.tipType = paramMap.get("TipType");
        this.tip = this.componentService.getSingleTipByCategory( this.tipType)
        if (this.tip.id === "Empty"){
          // Card nicht darstellen
        }
      };
    });
  }

}
