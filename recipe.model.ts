export class Recipe {
    public name: string;
    public desctiption: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.desctiption = description;
        this.imagePath = imagePath;
    }
}
