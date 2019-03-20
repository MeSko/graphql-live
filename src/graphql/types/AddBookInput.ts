import {InputType, Field} from "type-graphql";

@InputType()
export class AddBookInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    authorId?: number;

    @Field({ nullable: true })
    cycleId?: number;

}
