import {
    NgModule,
    Component,
    ViewEncapsulation,
    OnInit,
    Injectable
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ArticleComponent } from './reddit-article/article/article.component';
import { RedditArticleComponent } from './reddit-article/reddit-article.component';
import { FormArticleComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

/**
 * App component
 * Top level component
 */
@Component({
    selector: 'app',
    templateUrl: './src/app/app.component.html'
})

class AppComponent {
    constructor(){}
}

/**
 * App Module
 */
@NgModule({
    declarations: [AppComponent, ArticleComponent, FormArticleComponent, HeaderComponent, RedditArticleComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

class AppModule {
    constructor(){}
}

platformBrowserDynamic().bootstrapModule(AppModule);
