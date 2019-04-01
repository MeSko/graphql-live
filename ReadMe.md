# GraphQL - live coding -warsztaty

Przykładowa implementacja GraphQL w Typescript 
##Plan 

### [Etap 0] Omówienie boilerplate i wykorzystanych bibliotek

Przydatne linki:
https://medium.com/@MichalLytek/graphql-typescript-typegraphql-ba0225cb4bed
https://github.com/19majkel94/type-graphql
https://www.apollographql.com/docs/apollo-server/
https://github.com/graphql/dataloader


### [Etap 1] Prosty resolver
https://github.com/MeSko/graphql-live/tree/1-simple-resolver

Tworzymy schemat opisujący książkę + resolver
### [Etap 2] Przekazujemy argumenty do resolver-a
https://github.com/MeSko/graphql-live/tree/2-resolver-with-arguments

Dodajemy argumnety do naszego resolver-a
### [Etap 3] Tworzymy field resolver-a
https://github.com/MeSko/graphql-live/tree/3-field-resolver

Dodajemy zalezność do schemtau książki (autor) i tworzymy field resolver-a
### [Etap 4] Tworzymy mutacje
https://github.com/MeSko/graphql-live/tree/4-mutation

Dodajemy prosty schemta obiektu dodającego książke, dodajemy mutacje

### [Etap 5] Tworzymy cykl
https://github.com/MeSko/graphql-live/tree/5-cycle

Zapętlamy nasz schamt dodająć relacje Autora do książki

### [Etap 6] Dodajemy dataloader
https://github.com/MeSko/graphql-live/tree/6-dataloader

Tworzymy dataloadery i podpinamy je pod kontekst wywołań, refaktorujemy resolver-y
