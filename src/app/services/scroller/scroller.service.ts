import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  constructor(private viewportScroller: ViewportScroller) { }

  smoothMove(smoothMoveTarget: string): void {
    this.viewportScroller.scrollToAnchor(smoothMoveTarget);
  }

  getScrollPosition(): number {
    return this.viewportScroller.getScrollPosition()[1];
  }
}
