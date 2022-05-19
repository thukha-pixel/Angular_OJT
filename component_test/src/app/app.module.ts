import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { ParentVotetakerComponent } from './parent-votetaker/parent-votetaker.component';
import { ChildVotegiverComponent } from './child-votegiver/child-votegiver.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownChildTimerComponent } from './countdown-child-timer/countdown-child-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionParentComponent,
    VersionChildComponent,
    ParentVotetakerComponent,
    ChildVotegiverComponent,
    CountdownParentComponent,
    CountdownChildTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
