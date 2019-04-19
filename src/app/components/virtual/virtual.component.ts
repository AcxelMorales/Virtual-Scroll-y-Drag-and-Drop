import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { }

  public final(): void {
    this.viewport.scrollToIndex(this.personas.length);
  }

  public inicio(): void {
    this.viewport.scrollToIndex(this.personas[0]);
  }

  public mitad(): void {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

}
