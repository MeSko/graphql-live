import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Author {
    @Field()
    public id: number;

    @Field()
    public firstName: string;

    @Field()
    public surname: string;
}
