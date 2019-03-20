import {Query, Resolver} from "type-graphql";
import {HelloWorld} from "../types/HelloWorld";

@Resolver()
export class HelloWorldResolver {

    @Query((returns) => HelloWorld)
    public async helloWorld() {
        const message = new HelloWorld();
        message.message = "Hello World";
        return message;
    }
}
