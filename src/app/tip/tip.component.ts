import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../model/category';
import {Situation} from '../model/situation';
import {Tip} from '../model/tip';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../services/category.service';
import {SituationService} from '../services/situation.service';
import {TipService} from '../services/tip.service';
import {MatSort} from '@angular/material/sort';
import {TipDataSource} from '../datasources/tip-data-source';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css'],
})
export class TipComponent implements OnInit, AfterViewInit {
  showCategories = false;
  showSituations = false;
  showTips = false;
  categories: Category[];
  situations: Situation[];
  tips: Tip[];
  displayedColumns: string[] = ['name', 'title', 'score', 'helpful'];
  dataSource: TipDataSource;
  @ViewChild(MatSort) sort: MatSort;


  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private situationService: SituationService, private tipService: TipService) {
  }

  ngOnInit(): void {
    this.dataSource = new TipDataSource(this.tipService);
  }

  ngAfterViewInit(): void {
    this.dataSource.loadTips();
  }
}
