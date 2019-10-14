import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anc-two',
  templateUrl: './anc-two.component.html',
  styleUrls: ['./anc-two.component.scss']
})
export class AncTwoComponent implements OnInit {

  @Output('onAncTwoToggle') tumblerToHomePage = new EventEmitter()
  illustrated: boolean

  positiveNotificFromAncTwo = 'Отображено во втором предке'
  negativeNotificFromAncTwo = 'Скрыто во втором предке'

  constructor() { }

  ngOnInit() {}

  tumblerFromDescThree(illustrated) {
    this.illustrated = illustrated
    this.tumblerToHomePage.emit(this.illustrated)
  }

}
