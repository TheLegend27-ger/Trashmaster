import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { componentService } from 'src/app/components/componentService.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(public componentService: componentService, public route: ActivatedRoute, public router:Router) { }
  ngOnInit(): void {
    //Einzelner post in data Frame mit paging?
  }

}
