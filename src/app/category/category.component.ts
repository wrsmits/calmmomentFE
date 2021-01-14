import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {Situation} from '../model/situation';
import {Tip} from '../model/tip';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {SituationService} from '../services/situation.service';
import {TipService} from '../services/tip.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  showCategories = false;
  showSituations = false;
  showTips = false;
  categories: Category[];
  situations: Situation[];
  tips: Tip[];

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private situationService: SituationService, private tipService: TipService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.situationService.getSituations().subscribe(situations => this.situations = situations);
    this.tipService.getTips().subscribe(tips => this.tips = tips);
  }

}
