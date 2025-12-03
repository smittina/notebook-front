// TODO : TO IMPROVE WITH REREADING CASE
export const createBody = (data, quotations) => {

    const body = {
        idBook: 0,
        title: data.get("title"),
        idAuthor: 0,
        authorName: data.get("authorName"),
        cover: null,
        synopsis: data.get("synopsis"),
        genres: data.getAll("genres"),
        tropes: data.getAll("tropes"),
        pageNumber: Number(data.get("pageNumber")),
        saga: data.get("saga") === "true",
        allTomePublished: data.get("allTomePublished") === "on",
        numberOfTome: Number(data.get("numberOfTome")),
        typeOfReading: data.get("typeOfReading").toLowerCase(),
        starting: data.get("starting")+"T00:00:00",
        finished: data.get("finished")+"T00:00:00",
        status: data.get("status").toLowerCase(),
        currentPage: data.get("currentPage") === null ? Number(data.get("pageNumber")) : Number(data.get("currentPage")),
        rating: Number(data.get("rating")),
        quotations: quotations,
    }
    return body;
}