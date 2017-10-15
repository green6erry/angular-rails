import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: './documents.component.html'
})
export class DocumentsComponent {
    pageTitle: string = "Document Dashboard";
    documents: Document[] = [
        {
            title: "I'm a Doc",
            description: "I am the first doc.",
            file_url: "http://agb.rocks",
            updated_at: "08/01/97",
            image_url: "http://agb.rocks/content/images_general/hubert-910x430.jpg"
        },
        {
            title: "I'm a 2 Doc",
            description: "I am the 2 doc.",
            file_url: "http://agb.rocks",
            updated_at: "08/01/97",
            image_url: "http://agb.rocks/content/images_general/hubert-910x430.jpg"
        },
        {
            title: "I'm a 3 Doc",
            description: "I am the 3 doc.",
            file_url: "http://agb.rocks",
            updated_at: "08/01/97",
            image_url: "http://agb.rocks/content/images_general/hubert-910x430.jpg"
        }
    ]
}