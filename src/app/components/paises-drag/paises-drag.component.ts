import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises-drag',
  templateUrl: './paises-drag.component.html',
  styleUrls: ['./paises-drag.component.css']
})
export class PaisesDragComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((resp: any) => this.paises = resp)
  }

  public drop(event: CdkDragDrop<any>): void {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }

}
