import {Query, Resolver} from "type-graphql";
import {Book} from "../types/Book";
import {BookService} from "../../services/BookService";
import {Inject} from "typedi";

@Resolver()
export class BooksResolver {

    @Inject()
    private bookService: BookService;

    @Query((returns) => [Book])
    public async search() {
        return this.bookService.getAllBooks(100, 0);
    }
}
