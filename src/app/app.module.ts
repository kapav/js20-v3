import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import { AncOneComponent } from './shared/components/anc-one/anc-one.component';
import { AncTwoComponent } from './shared/components/anc-two/anc-two.component';
import { DescOneComponent } from './shared/components/desc-one/desc-one.component';
import { DescTwoComponent } from './shared/components/desc-two/desc-two.component';
import { DescThreeComponent } from './shared/components/desc-three/desc-three.component';
import { DescFourComponent } from './shared/components/desc-four/desc-four.component';
import { DeclivityComponent } from './shared/components/declivity/declivity.component';
import { InclineComponent } from './shared/components/incline/incline.component';
import { PitchComponent } from './shared/components/pitch/pitch.component';
import { SlantComponent } from './shared/components/slant/slant.component';
import { TiltComponent } from './shared/components/tilt/tilt.component';
import { StaircaseComponent } from './shared/components/staircase/staircase.component';
import { StairwayComponent } from './shared/components/stairway/stairway.component';
import { StairwellComponent } from './shared/components/stairwell/stairwell.component';
import { BracketPipe } from './shared/pipes/bracket.pipe'
import { EvidenceService } from './shared/services/evidence.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AncOneComponent,
    AncTwoComponent,
    DescOneComponent,
    DescTwoComponent,
    DescThreeComponent,
    DescFourComponent,
    DeclivityComponent,
    InclineComponent,
    PitchComponent,
    SlantComponent,
    TiltComponent,
    StaircaseComponent,
    StairwayComponent,
    StairwellComponent,
    BracketPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EvidenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
