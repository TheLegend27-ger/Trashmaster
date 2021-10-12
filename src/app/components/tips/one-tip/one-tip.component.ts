import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TipData } from 'src/app/models/tip.model';
import { componentService } from '../../componentService.service';

@Component({
  selector: 'app-one-tip',
  templateUrl: './one-tip.component.html',
  styleUrls: ['./one-tip.component.scss']
})
export class OneTipComponent implements OnInit {

  constructor(public componentService: componentService, public route: ActivatedRoute, public router:Router) {}
  private mode = "alltips";
  private tipType: any;
  tip: TipData={
    id: 'LOST',
    Title: 'LOST',
    Text: 'LOST',
    TipType: 'LOST',
    ImageBase64: 'LOST'
  }

  ngOnInit(): void {



    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.router.url.indexOf("/alltips/allgemein") > -1) {
        this.tipType = "allgemein";
      } else if (this.router.url.indexOf("/alltips/blau") > -1) {
        this.tipType = "blau";
      } else if (this.router.url.indexOf("/alltips/gelb") > -1) {
        this.tipType = "gelb";
      } else if (this.router.url.indexOf("/alltips/braun") > -1) {
        this.tipType = "braun";
      } else if (this.router.url.indexOf("/alltips/glas") > -1) {
        this.tipType = "glas";
      } else if (this.router.url.indexOf("/alltips/schwarz") > -1) {
        this.tipType = "schwarz";
      } else if (this.router.url.indexOf("/alltips/sondermuell") > -1) {
        this.tipType = "sondermuell";
      } else {
        this.mode = "random"
        this.tipType = "Empty"
      }
      console.log(this.tipType)
      if (this.tipType !== "Empty") {
        this.tip = this.componentService.getSingleTipByCategory(this.tipType)
        console.log(this.tip)
        if (this.tip.id !== "Empty"){
          //this.hidden = false;
        }
      }
    });
  }

}
