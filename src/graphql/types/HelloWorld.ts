import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class HelloWorld {
    @Field()
    public message: string;
}
