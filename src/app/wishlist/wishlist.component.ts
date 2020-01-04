import { Component, OnInit } from '@angular/core';
import { ComponentPC } from '../shared/componentpc.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  components:ComponentPC[] = [
    new ComponentPC('NZXT GTX 1050',2),
    new ComponentPC('ASUS GTX 1060',5)

  ];
  constructor() { }

  ngOnInit() {
  }

}
