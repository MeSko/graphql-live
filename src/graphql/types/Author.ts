import {Field, ObjectType} from "type-graphql";
import {Book} from "./Book";

@ObjectType()
export class Author {
    @Field()
    public id: number;

    @Field()
    public firstName: string;

    @Field()
    public surname: string;

    @Field(() => [Book], {nullable: true})
    public books?: Book[]
}
