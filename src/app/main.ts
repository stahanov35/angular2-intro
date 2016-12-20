import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * Form Component
 */
@Component({
    selector: 'form-article',
    templateUrl: './src/app/form-article.component.html',
    styleUrls: ['./src/app/form-article.component.css']
})

class FormArticleComponent {
    constructor(){
    }
}

/**
 * Header Component
 */
@Component({
    selector: 'header-app',
    templateUrl: './src/app/header.component.html'
})

class HeaderComponent {
    constructor(){

    }
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
    declarations: [AppComponent, FormArticleComponent, HeaderComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})

class AppModule {
    constructor(){}
}

platformBrowserDynamic().bootstrapModule(AppModule);
