import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../items';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  items = ITEMS;
  selected_item: Item;

  comp_title = 'Comp 1 Component';
  item: Item = {
    id: 1,
    name: 'Windstorm',
    uuid: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: Item): void {
    this.selected_item = item;
  }


}