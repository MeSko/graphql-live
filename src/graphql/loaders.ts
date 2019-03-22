import DataLoader from "dataloader";
import {AuthorEntity, BookEntity} from "../services/fakeDb";
import {Container} from "typedi";
import {BookService} from "../services/BookService";

export interface Loaders {
    authorsLoader: DataLoader<number, AuthorEntity>,
    authorsBooksLoader: DataLoader<number, BookEntity[]>,
}

export const createLoaders = (): Loaders => {
    const bookService = Container.get(BookService);


    const authorsLoader = new DataLoader<number, AuthorEntity>(async (authorIds) => {
        const authors = await bookService.getAuthors(authorIds);
        return authorIds.map((authorId) => authors.find(({id}) => authorId === id));
    });


    const authorsBooksLoader = new DataLoader<number, BookEntity[]>(async (authorIds) => {
        const books = await bookService.getAuthorsBooks(authorIds);
        return authorIds.map((id) => books.filter(({authorId}) => id === authorId));
    });
    return {
        authorsLoader,
        authorsBooksLoader
    };
};
