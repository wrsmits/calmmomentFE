import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {GeneralComponent} from './general/general.component';
import {HelpComponent} from './help/help.component';
import {RateUsComponent} from './rate-us/rate-us.component';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {SituationComponent} from './situation/situation.component';
import {SituationDetailComponent} from './situation-detail/situation-detail.component';
import {TipComponent} from './tip/tip.component';
import {TipDetailComponent} from './tip-detail/tip-detail.component';
import {QuestionFormComponent} from './question-form/question-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'help', component: HelpComponent},
  {path: 'rate-us', component: RateUsComponent},
  {path: 'home', component: CategoryComponent},
  {path: 'category/:categoryId', component: CategoryDetailComponent},
  {path: 'situation', component: SituationComponent},
  {path: 'situation/:situationId', component: SituationDetailComponent},
  {path: 'tip', component: TipComponent},
  {path: 'tip/:tipId', component: TipDetailComponent},
  {path: 'questions', component: QuestionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
