import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desc-three',
  templateUrl: './desc-three.component.html',
  styleUrls: ['./desc-three.component.scss']
})
export class DescThreeComponent implements OnInit {

  @Output('onDescThree') tumblerToAncTwo = new EventEmitter()
  demonstrated: boolean = false

  positiveNotificFromDescThree = 'Отображено в третьем потомке'
  negativeNotificFromDescThree = 'Скрыто в третьем потомке'

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.demonstrated = !this.demonstrated
    this.tumblerToAncTwo.emit(this.demonstrated)
  }

}
