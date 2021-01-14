import {AppUser} from './appuser';
import {Situation} from './situation';

export interface Category {
  categoryId: number;
  categoryName: string;
  categoryTitle: string;
  categoryWriter: AppUser;
  categoryImage: string;
  categorySituation: Situation[];
}
