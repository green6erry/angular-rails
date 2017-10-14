import { DocumentsComponent } from './documents/documents.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		HomepageComponent, 
		AppComponent,
		DocumentsComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}