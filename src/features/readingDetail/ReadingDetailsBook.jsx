export const ReadingDetailsBook = ( { details } ) => {

    const getInformationsFromSaga = () => {
        if(details?.saga) {
            return <tr>
                <th scope="row">Tous les tomes sont publiés ?</th>
                <td>{details?.allTomePublished ? "Oui" : "Non"}</td>
            </tr>
        }
    }

    return <div className="details-infos">
        <h2>Informations sur le livre</h2>
        <table>
            <tbody>
            <tr>
                <th scope="row">Auteur</th>
                <td>{details?.authorName}</td>
            </tr>
            <tr>
                <th scope="row">Nombre de pages</th>
                <td>{details?.pageNumber}</td>
            </tr>
            <tr>
                <th scope="row">Genres</th>
                <td>{
                    details?.genres.map((genre, index) => <span key={index}> {genre} / </span> )
                }</td>
            </tr>
            <tr>
                <th scope="row">Tropes</th>
                <td>{
                    details?.tropes.map((trope, index) => <span key={index}> {trope} / </span> )
                }</td>
            </tr>
            <tr>
                <th scope="row">Saga ?</th>
                <td>{
                    details?.saga ? "Oui" : "Non"
                }</td>
            </tr>
            {
                getInformationsFromSaga()
            }
            </tbody>
        </table>
        <h3><u>Synopsis :</u></h3>
        <p>{details?.synopsis}</p>
    </div>
}