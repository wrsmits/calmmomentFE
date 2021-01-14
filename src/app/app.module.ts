import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';
import {GeneralComponent} from './general/general.component';
import {HelpComponent} from './help/help.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {RateUsComponent} from './rate-us/rate-us.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {SituationComponent} from './situation/situation.component';
import {SituationDetailComponent} from './situation-detail/situation-detail.component';
import {TipComponent} from './tip/tip.component';
import {TipDetailComponent} from './tip-detail/tip-detail.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {QuestionFormComponent} from './question-form/question-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    GeneralComponent,
    HelpComponent,
    FeedbackComponent,
    RateUsComponent,
    CategoryComponent,
    CategoryDetailComponent,
    SituationComponent,
    SituationDetailComponent,
    TipComponent,
    TipDetailComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
