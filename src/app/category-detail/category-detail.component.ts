import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {Situation} from '../model/situation';
import {Tip} from '../model/tip';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {SituationService} from '../services/situation.service';
import {TipService} from '../services/tip.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  showCategories = false;
  showSituations = false;
  showTips = false;
  categories: Category[];
  situations: Situation[];
  tips: Tip[];
  selectedCategory: Category;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private situationService: SituationService, private tipService: TipService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    this.situationService.getSituations().subscribe(situations => this.situations = situations);
    this.tipService.getTips().subscribe(tips => this.tips = tips);
    const categoryIdUrl = this.route.snapshot.paramMap.get('categoryId');
    const categoryId: number = +categoryIdUrl;
    this.categoryService.getCategory(categoryId).subscribe(category => this.selectedCategory = category);
    // this.getCategory();
  }

  getCategory(): void {
    const categoryIdUrl = this.route.snapshot.paramMap.get('categoryId');
    const categoryId: number = +categoryIdUrl;
    this.categoryService.getCategory(categoryId).subscribe(category => this.selectedCategory = category);
  }

  createCategory(newCategory: Category): void {
    this.categoryService.createCategory(newCategory).subscribe(category => this.categories.push(category));
  }

}
