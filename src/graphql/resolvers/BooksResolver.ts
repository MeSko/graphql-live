import {Query, Resolver, Arg} from "type-graphql";
import {Book} from "../types/Book";
import {BookService} from "../../services/BookService";
import {Inject} from "typedi";

@Resolver()
export class BooksResolver {

    @Inject()
    private bookService: BookService;

    @Query(() => [Book])
    public async searchBooks(@Arg('take') take: number, @Arg('skip') skip: number ) {
        return this.bookService.getAllBooks(take, skip);
    }

    @Query(() => Number)
    public async countBooks() {
        return this.bookService.countAllBooks();
    }
}
