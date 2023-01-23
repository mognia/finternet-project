import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-btns',
  templateUrl: './footer-btns.component.html',
  styleUrls: ['./footer-btns.component.scss']
})
export class FooterBtnsComponent implements OnInit {
  @Output() nextPage  = new EventEmitter<boolean>();
  @Output() prePage  = new EventEmitter<boolean>();
  @Input() enablePre:boolean = true;
  @Input() enableNext:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onNext(value:boolean) {
    this.nextPage.emit(value);
  }
  onPre(value:boolean) {
    this.prePage.emit(value);
  }
}
