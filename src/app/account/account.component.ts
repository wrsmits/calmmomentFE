import {Component, OnInit} from '@angular/core';
import {AppUser} from '../model/appuser';
import {ActivatedRoute} from '@angular/router';
import {AppuserService} from '../services/appuser.service';
import {Category} from '../model/category';
import {Situation} from '../model/situation';
import {Tip} from '../model/tip';
import {CategoryService} from '../services/category.service';
import {SituationService} from '../services/situation.service';
import {TipService} from '../services/tip.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  showCategories = false;
  showSituations = false;
  showTips = false;
  accounts: AppUser[];
  categories: Category[];
  situations: Situation[];
  tips: Tip[];

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private appuserService: AppuserService, private categoryService: CategoryService, private situationService: SituationService, private tipService: TipService) {
  }

  ngOnInit(): void {
    this.appuserService.getAppUsers().subscribe(accounts => this.accounts = accounts);
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.situationService.getSituations().subscribe(situations => this.situations = situations);
    this.tipService.getTips().subscribe(tips => this.tips = tips);
  }

}
