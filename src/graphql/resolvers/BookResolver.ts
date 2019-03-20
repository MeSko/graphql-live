import {Query, Resolver, ResolverInterface, FieldResolver, Root} from "type-graphql";
import {Book} from "../types/Book";
import {BookService} from "../../services/BookService";
import {Inject} from "typedi";

@Resolver(Book)
export class BookResolver implements ResolverInterface<Book> {

    @Inject()
    private bookService: BookService;

    @FieldResolver()
    public async author(@Root() book) {
        return this.bookService.getAuthor(book.authorId);
    }

    @FieldResolver()
    public async cycle(@Root() book) {
        return this.bookService.getCycle(book.cycleId);
    }
}
