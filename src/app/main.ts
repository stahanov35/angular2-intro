import {
    NgModule,
    Component,
    ViewEncapsulation,
    OnInit,
    Injectable
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ArticleComponent } from './article/article.component';
import { FormArticleComponent } from './form/form.component';

/**
 * Header Component
 */
@Component({
    selector: 'header-app',
    templateUrl: './src/app/header.component.html'
})

class HeaderComponent {
    constructor(){}
}

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
    declarations: [AppComponent, ArticleComponent, FormArticleComponent, HeaderComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

class AppModule {
    constructor(){}
}

platformBrowserDynamic().bootstrapModule(AppModule);
