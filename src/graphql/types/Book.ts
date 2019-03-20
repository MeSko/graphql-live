import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Book {
    @Field()
    public id: number;

    @Field()
    public title: string;
}
