import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/articles';
import { FormsModule, NgModel } from '@angular/forms'; 
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-articles-new',
  standalone: true,
  templateUrl: './articles-new.component.html',
  styleUrl: './articles-new.component.css',
  imports: [FormsModule],
   providers:[ArticleService]
})
export class ArticlesNewComponent implements OnInit {

  public article : Article;
  public status : string = ''; 

  constructor(
    private _route : ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ){
    this.article = new Article('','','','', null);
  }

  ngOnInit(): void {
    
  }
}