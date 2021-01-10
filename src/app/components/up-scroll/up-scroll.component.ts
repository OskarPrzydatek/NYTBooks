import { Component, HostListener, Input, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ScrollerService } from '../../services/scroller/scroller.service';

@Component({
  selector: 'app-up-scroll',
  templateUrl: './up-scroll.component.html',
  styleUrls: ['./up-scroll.component.scss']
})
export class UpScrollComponent implements OnInit, AfterViewInit {
  @Input() smoothMoveTarget: string;
  @Input() scrollPosition: number;
  visibility = false;

  constructor(private scrollerService: ScrollerService,
              private changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.visibility = true;
    this.changeDetectionRef.detectChanges();
  }

  smoothMove(): void {
    this.scrollerService.smoothMove(this.smoothMoveTarget);
  }

  @HostListener('window:scroll', ['$event'])
  getScrollPosition(): number {
    return this.scrollerService.getScrollPosition();
  }
}
