import { Component, OnInit } from '@angular/core';

import {EvidenceService} from '../../services/evidence.service'

@Component({
  selector: 'app-incline',
  templateUrl: './incline.component.html',
  styleUrls: ['./incline.component.scss']
})
export class InclineComponent implements OnInit {

  public itemsSource: string[]

  messageFromTextbox: string
  messageKeypress: string
  messageTwoEvents: string

  fillingList: string[] = []

  dataTestingInput = 'Изменение классов инпута при действиях'

  // private evidenseService: EvidenceService внедрение зависимости через конструктор
  constructor(private evidenceService: EvidenceService) { }

  ngOnInit() {
    this.itemsSource = this.evidenceService.getData()
  }

  onKeyupFromTextbox(data) {
    this.messageFromTextbox = data
  }

  onKeyupKeypress(data) {
    this.messageKeypress = data
  }

  onKeyupTwoEvents(data) {
    this.messageTwoEvents = data
  }

  addListItem(item: string) {
    this.fillingList.push(item)
  }

}
