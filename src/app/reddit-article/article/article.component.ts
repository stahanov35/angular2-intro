import { Component, Input } from '@angular/core';

/**
 * Article component.
 * @class ArticleComponent
 *
 */
@Component({
    moduleId: module.id,
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent {
     @Input() article: {};
    constructor(){
    }
}
