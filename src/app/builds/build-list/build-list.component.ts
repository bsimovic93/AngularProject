import { Component, OnInit } from '@angular/core';
import { Build } from '../build.model';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.css']
})
export class BuildListComponent implements OnInit {

  builds:Build[] = [
     new Build('Test','Desc','',299.99),
     new Build('Test','Desc','',299.99)
  ];

  constructor() {
  
   
   }

  ngOnInit() {
  }

}
