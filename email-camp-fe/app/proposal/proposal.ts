export class Proposal {
    constructor(
        public id?: number,
        public customer?: string,
        public portfolio_url: string = 'http://',
        public tools?: string,
        public estimated_hours?: number,
        public hourly_rate?: number,
        public weeks_to_complete?: number,
        public client_email?: string

    ) {}
}

//15, 'GIB Company', 'http://agb.rocks', 'Ruby and Angular 2', 150, 120, 15, 'email@gmail.com'