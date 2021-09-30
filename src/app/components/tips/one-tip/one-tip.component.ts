import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-tip',
  templateUrl: './one-tip.component.html',
  styleUrls: ['./one-tip.component.scss']
})
export class OneTipComponent implements OnInit {
  title  = 3;
  constructor() { }

  ngOnInit(): void {

  }

}
