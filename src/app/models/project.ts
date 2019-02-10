export class Project {
    clientName: string;
    duration: string;
    description: string;

    constructor(config) {
        config = config || {};
        this.clientName = config.clientName;
        this.duration = config.duration;
        this.description = config.description;
    }
}