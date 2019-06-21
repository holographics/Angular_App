import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
 
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() item: Item;
 
  constructor() { }
 
  ngOnInit() {
  }
 
}