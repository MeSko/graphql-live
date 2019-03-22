import {Query, Resolver, ResolverInterface, FieldResolver, Root, Ctx} from "type-graphql";
import {Author} from "../types/Author";
import {AuthorEntity} from "../../services/fakeDb";
import {Loaders} from "../loaders";

@Resolver(Author)
export class AuthorResolver implements ResolverInterface<Author> {
    @FieldResolver()
    public async books(@Root() author: AuthorEntity, @Ctx('loaders') loaders: Loaders) {
        return loaders.authorsBooksLoader.load(author.id);
    }

}
