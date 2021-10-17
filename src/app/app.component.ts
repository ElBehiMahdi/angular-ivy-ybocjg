import { Component, OnInit, VERSION } from '@angular/core';
import { Produit } from '../model/Produits';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  produit = new Produit();
  list: Produit[] = [];
  isShow = true;

  constructor() {}

  ngOnInit(): void {}
  name = 'Angular ' + VERSION.major;
  addProduct(f: any) {
    this.list.push(f);
    this.isShow = !this.isShow;
  }
}
