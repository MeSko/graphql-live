import "reflect-metadata";
import {ApolloServer} from "apollo-server";
import {buildSchema} from "type-graphql";
import {Container} from "typedi";

void (async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [__dirname + "/graphql/resolvers/*.ts"],
        // register the 3rd party IOC container
        container: Container
    });

    // Create GraphQL server
    const server = new ApolloServer({
        schema,
        cors: {
            maxAge: 1728000
        }
    });

    // Start the server
    const {url} = await server.listen(3000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);

})();
