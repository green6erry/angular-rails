import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: './proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'GIB Company', 'http://agb.rocks', 'Ruby and Angular 2', 150, 120, 15, 'email@gmail.com')
    proposalTwo: Proposal = new Proposal(16, 'sd Company', 'http://agb.rocks', 'Ruby and Angular 2', 150, 120, 15, 'email@gmail.com')
    proposalThree: Proposal = new Proposal(17, 'some Company', 'http://agb.rocks', 'Ruby and Angular 2', 150, 120, 15, 'email@gmail.com')
    proposalFour: Proposal = new Proposal(18, 'cheese Company', 'http://agb.rocks', 'Ruby and Angular 2', 150, 120, 15, 'email@gmail.com')

    proposals: Proposal[]= [
        this.proposalOne, 
        this.proposalTwo, 
        this.proposalThree, 
        this.proposalFour
    ]
 }