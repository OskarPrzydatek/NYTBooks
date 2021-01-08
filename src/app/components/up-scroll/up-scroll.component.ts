import { Component, HostListener, Input, OnInit, AfterViewInit} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-up-scroll',
  templateUrl: './up-scroll.component.html',
  styleUrls: ['./up-scroll.component.scss']
})
export class UpScrollComponent implements OnInit, AfterViewInit {
  @Input() target: string;
  @Input() scrollPosition: number;
  start = false;
  console = console;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.start = true;
  }

  upScroll(): void {
    this.viewportScroller.scrollToAnchor(this.target);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): number {
    return window.pageYOffset;
  }
}
