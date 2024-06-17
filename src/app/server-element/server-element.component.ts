import { Component, Input, ViewEncapsulation, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom //.none .Native = ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor(){
    console.log('constructor gerufen');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges gerufen')
    console.log(changes)
  }

  ngOnInit(){
    console.log('ngOnInit gerufen');
  }
}