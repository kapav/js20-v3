import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  buryInscription = 'Скрываемая надпись'
  evinceNotice = 'Отображаемое уведомление'
  lurked: boolean

  positiveNotificFromHomePage = 'Отображено на домашней странице'
  negativeNotificFromHomePage = 'Скрыто в домашней странице'

  constructor() {}

  ngOnInit() {}

  tumblerFromAncTwo(portrayed) {
    this.lurked = portrayed
  }

}
