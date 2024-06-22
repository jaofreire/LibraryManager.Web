export class ViewBooksModel{
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    authorId: number;
    author: any;
    publishedDate: any;

    constructor(data: any){
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.price = data.price
        this.category = data.category
        this.authorId = data.authorId
        this.author = data.author
        this.publishedDate = data.publishedDate
    }


}