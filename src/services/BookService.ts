import {Service} from "typedi";
import {Authors, Books, Cycles} from "./fakeDb";

const wait100ms = function () {
    count++;
    console.log("query count", count);
    return new Promise((resolve) => {
        setTimeout(() => {resolve()}, 100);
    })
};
let count = 0;
@Service()
export class BookService {


    public async getAllBooks(take: number, skip: number) {
        await wait100ms();
        return Books.slice(skip, skip + take);
    }

    public async countAllBooks() {
        await wait100ms();
        return Books.length;
    }

    public async getAuthor(authorId: number) {
        await wait100ms();
        return Authors.find(({id}) => id === authorId);
    }

    public async getAuthors(authorIds: number[]) {
        await wait100ms();
        return Authors.filter(({id}) => authorIds.includes(id));
    }

    public async getAuthorBooks(authorId: number) {
        await wait100ms();
        return Books.filter((book) => book.authorId === authorId);
    }
    public async getAuthorsBooks(authorIds: number[]) {
        await wait100ms();
        return Books.filter((book) => authorIds.includes(book.authorId));
    }

    public async getCycle(cycleId: number) {
        await wait100ms();
        return Cycles.find(({id}) => id === cycleId);
    }

    public async addBook(title: string, authorId?: number, cycleId?: number) {
        await wait100ms();
        const book = {
            id: Books.length + 1,
            title,
            authorId,
            cycleId
        };
        Books.push(book);
        return book;
    }

    public async addAuthor(firstName: string, surname: string) {
        await wait100ms();
        const author = {
            id: Authors.length + 1,
            firstName,
            surname,
        };
        Authors.push(author);
        return author;
    }

    public async addCycle(name: string) {
        await wait100ms();
        const cycle = {
            id: Cycles.length + 1,
            name,
        };
        Cycles.push(cycle);
        return cycle;
    }

}
