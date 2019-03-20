import {Field, ObjectType} from "type-graphql";
import {Author} from "./Author";
import {Cycle} from "./Cycle";

@ObjectType()
export class Book {
    @Field()
    public id: number;

    @Field()
    public title: string;

    @Field({nullable: true})
    public author?: Author;

    @Field({nullable: true})
    public cycle?: Cycle;
}
