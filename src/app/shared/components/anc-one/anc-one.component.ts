import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anc-one',
  templateUrl: './anc-one.component.html',
  styleUrls: ['./anc-one.component.scss']
})
export class AncOneComponent implements OnInit {

  @Input('ancOneLettering') tuckInscription: string
  @Input('ancOneAnnouncement') revealNotice: string
  @Input('ancOneToggle') stashed: boolean

  positiveNotificFromAncOne = 'Отображено в первом предке'
  negativeNotificFromAncOne = 'Скрыто в первом предке'

  constructor() { }

  ngOnInit() {
  }

}
