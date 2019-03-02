export class Education {
    private collegeName: string;
    private duration: string;
    private degreeName: string;
    private description: string;

    constructor(config) {
        config = config || {};
        this.collegeName = config.collegeName;
        this.duration = config.duration;
        this.degreeName = config.degreeName;
        this.description = config.description;
    }
}