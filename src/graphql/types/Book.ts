import {Field, ObjectType} from "type-graphql";
import {Author} from "./Author";
import {Cycle} from "./Cycle";

@ObjectType()
export class Book {
    @Field()
    public id: number;

    @Field()
    public title: string;

    @Field(() => Author, {nullable: true})
    public author?: Author;

    @Field(() => Cycle, {nullable: true})
    public cycle?: Cycle;
}
