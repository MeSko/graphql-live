import {Query, Resolver, ResolverInterface, FieldResolver, Root} from "type-graphql";
import {BookService} from "../../services/BookService";
import {Inject} from "typedi";
import {Author} from "../types/Author";

@Resolver(Author)
export class AuthorResolver implements ResolverInterface<Author> {

    @Inject()
    private bookService: BookService;

    @FieldResolver()
    public async books(@Root() author) {
        return this.bookService.getAuthorBooks(author.id);
    }

}
