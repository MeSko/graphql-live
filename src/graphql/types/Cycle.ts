import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Cycle {
    @Field()
    public id: number;

    @Field()
    public name: string;
}
