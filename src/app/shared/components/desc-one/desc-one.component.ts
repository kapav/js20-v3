import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desc-one',
  templateUrl: './desc-one.component.html',
  styleUrls: ['./desc-one.component.scss']
})
export class DescOneComponent implements OnInit {

  @Input('descOneLettering') obscureInscription: string
  @Input('descOneAnnouncement') showNotice: string
  @Input('descOneToggle') dissembled: boolean

  constructor() { }

  ngOnInit() {
  }

}
