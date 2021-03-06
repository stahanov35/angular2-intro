"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var config_data_1 = require('../config-data');
/**
 * RedditArticle component.
 * @class RedditArticleComponent
 *
 */
var RedditArticleComponent = (function () {
    function RedditArticleComponent() {
        if (config_data_1.data) {
            var jsonData = JSON.stringify(config_data_1.data);
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
    RedditArticleComponent.prototype.getConfigData = function (key) {
        return this.configData[key];
    };
    RedditArticleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reddit-article',
            templateUrl: './reddit-article.component.html',
            styleUrls: ['./reddit-article.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RedditArticleComponent);
    return RedditArticleComponent;
}());
exports.RedditArticleComponent = RedditArticleComponent;
//# sourceMappingURL=reddit-article.component.js.map