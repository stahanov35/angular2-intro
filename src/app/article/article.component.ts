import { Component } from '@angular/core';

import { data } from '../config-data';

/**
 * Article Interface
 * @interface IArticle
 */
interface IArticle {
    id: string;
    point: number;
    title: string;
    link: string;
}

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
    public configData: any;
    public articles: IArticle[];
    constructor(){
        if (data) {
            let jsonData = JSON.stringify(data);

            this.configData = JSON.parse(jsonData);
            this.articles = this.getConfigData("articles");
        }
    }

    ngOnInit() {
        console.clear();
        // this.showLog(this.articles);
    }

    private showLog(data: any): void {
        console.log(data);
    }

    /**
     * Get configuration data
     *
     * @param key Configuration key
     * @return Configuration information
     */
    public getConfigData(key: string): any {
        return this.configData[key];
    }
}
