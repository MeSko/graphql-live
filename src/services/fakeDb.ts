export interface BookEntity {
    id: number,
    title: string,
    authorId: number | null,
    cycleId: number | null,
}
export interface AuthorEntity {
    id: number,
    firstName: string,
    surname: string,
}
export interface CycleEntity {
    id: number,
    name: string,
}
export const Books: BookEntity[] = [
    {id: 1, title: "Imie wiatru", authorId: 1, cycleId: 1},
    {id: 2, title: "Strach mędrca. Część 1", authorId: 1, cycleId: 1},
    {id: 3, title: "Strach mędrca. Część 2", authorId: 1, cycleId: 1},
    {id: 4, title: "Drużyna Pierścienia", authorId: 2, cycleId: 2},
    {id: 4, title: "Dwie wieże", authorId: 2, cycleId: 2},
    {id: 5, title: "Powrót króla ", authorId: 2, cycleId: 2},
    {id: 6, title: "Pięćdziesiąt twarzy Greya", authorId: 3, cycleId: null},
];

export const Authors: AuthorEntity[] = [
    {id: 1, firstName: "Patrick", surname: "Rothfuss"},
    {id: 2, firstName: "John", surname: "Tolkien"},
    {id: 3, firstName: "Foley", surname: "James"},
];

export const Cycles: CycleEntity[] = [
    {id: 1, name: "Kroniki królobójcy"},
    {id: 2, name: "Władca pierścieni"},
];
