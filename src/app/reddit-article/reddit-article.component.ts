import { Component } from '@angular/core';

import { IArticle } from './reddit-article.model'
import { data } from '../config-data';

/**
 * RedditArticle component.
 * @class RedditArticleComponent
 *
 */
@Component({
    moduleId: module.id,
    selector: 'reddit-article',
    templateUrl: './reddit-article.component.html',
    styleUrls: ['./reddit-article.component.css']
})

export class RedditArticleComponent {
    public configData: any;
    public articles: IArticle[];
    constructor(){
        if (data) {
            let jsonData = JSON.stringify(data);

            this.configData = JSON.parse(jsonData);
            this.articles = this.getConfigData("articles");
        }
    }

    // ngOnInit() {
    //     console.clear();
    //     // this.showLog(this.articles);
    // }

    // private showLog(data: any): void {
    //     console.log(data);
    // }

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
