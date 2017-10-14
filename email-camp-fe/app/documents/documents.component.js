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
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: './documents.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map