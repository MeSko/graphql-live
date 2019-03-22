import {Query, Resolver, ResolverInterface, FieldResolver, Root, Ctx} from "type-graphql";
import {Book} from "../types/Book";
import {BookService} from "../../services/BookService";
import {Inject} from "typedi";
import {BookEntity} from "../../services/fakeDb";
import {Loaders} from "../loaders";

@Resolver(Book)
export class BookResolver implements ResolverInterface<Book> {

    @Inject()
    private bookService: BookService;

    @FieldResolver()
    public async author(@Root() book: BookEntity, @Ctx('loaders') loaders: Loaders) {
        return loaders.authorsLoader.load(book.authorId);
    }

    @FieldResolver()
    public async cycle(@Root() book: BookEntity) {
        return this.bookService.getCycle(book.cycleId);
    }
}
