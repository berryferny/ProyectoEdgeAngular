import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/articles';
import { Global } from '../../services/global';
import { response } from 'express';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[] = [];
  public url: string = '';

  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
    response => {
      this.articles = response.articles;
    },
    error => {
      console.log(error);
    }

    )

  }
}
