import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr title;
  @attr price;
  @attr isbn;
  @attr author;
}
