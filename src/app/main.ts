import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * App Component
 */
@Component({
    selector: 'app',
    templateUrl: './src/app/app.component.html'
})

class App {
    public text: string;

    constructor(){
        this.text = "Hello world"
    }
}

/**
 * Module
 */
@NgModule({
    declarations: [App],
    imports: [BrowserModule],
    bootstrap: [App]
})

class AppModule {
    constructor(){}
}

platformBrowserDynamic().bootstrapModule(AppModule);
