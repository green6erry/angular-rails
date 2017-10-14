import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		HomepageComponent, 
		AppComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}