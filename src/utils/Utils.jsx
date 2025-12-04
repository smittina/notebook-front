export const createBody = (data, formInformation, quotations, reReading) => {

    const getBookId = (title) => {
       const book = formInformation.books.filter(
           (book) => book.title === title
       );
        return book[0].id;
    }

    const getAuthorId = (name) => {
       const author = formInformation.authors.filter(
           (author) => author.name === name
       );
       return author[0].id;
    }

    return {
        idBook: reReading ? getBookId(data.get("title-reReading")) : 0,
        title: reReading ? data.get("title-reReading") : data.get("title"),
        idAuthor: reReading ? getAuthorId(data.get("authorName-reReading")) : 0,
        authorName: reReading ? data.get("authorName-reReading") : data.get("authorName"),
        cover: null,
        synopsis: data.get("synopsis"),
        genres: data.getAll("genres"),
        tropes: data.getAll("tropes"),
        pageNumber: Number(data.get("pageNumber")),
        saga: data.get("saga") === "true",
        allTomePublished: data.get("allTomePublished") === "on",
        numberOfTome: Number(data.get("numberOfTome")),
        typeOfReading: data.get("typeOfReading").toLowerCase(),
        starting: data.get("starting") + "T00:00:00",
        finished: data.get("finished") + "T00:00:00",
        status: data.get("status").toLowerCase(),
        currentPage: data.get("currentPage") === null ? Number(data.get("pageNumber")) : Number(data.get("currentPage")),
        rating: Number(data.get("rating")),
        quotations: quotations,
    };
}