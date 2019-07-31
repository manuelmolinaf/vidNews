export class Video {
    title: string;
    tags: Array<string>;
    description: string;
    url: string;

    constructor(tags: Array<string>, description: string, url: string, title: string) {
        this.tags = tags;
        this.description = description;
        this.url = url;
        this.title = title;
    }
}
