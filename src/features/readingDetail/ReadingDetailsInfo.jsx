export const ReadingDetailsInfo = ( {details} ) => {

    const getReadingStatusInformation = () => {
        return details?.status === "terminé" ?
            <tr>
                <th scope="row">Date de fin</th>
                <td>{details?.finished}</td>
            </tr>
            :
            <tr>
                <th scope="row">Avancement</th>
                <td>{details?.currentPage} / {details?.pageNumber}</td>
            </tr>
    }

    const getRating = () => {

        switch(details?.rating) {
            case 0: return "-"
            case 1.0: return "⭐"
            case 2.0: return "⭐⭐"
            case 3.0: return "⭐⭐⭐"
            case 4.0: return "⭐⭐⭐⭐"
            case 5.0: return "⭐⭐⭐⭐⭐"
            case 6.0: return"Coup de ❤️"
            default: console.log(`ERROR WITH RATING : ${details?.rating}`);
        }
    }

    return <div className="details-infos">
        <h2>Informations sur la lecture</h2>
        <table>
            <tbody>
                <tr>
                    <th scope="row">Status</th>
                    <td>{details?.status}</td>
                </tr>
                <tr>
                    <th scope="row">Date de début</th>
                    <td>{details?.starting}</td>
                </tr>
                {getReadingStatusInformation()}
                <tr>
                    <th scope="row">Format</th>
                    <td>{details?.typeOfReading}</td>
                </tr>
                <tr>
                    <th scope="row">Note</th>
                    <td>{getRating()}</td>
                </tr>
            </tbody>
        </table>
        <h3><u>Citations préférées :</u></h3>
        {
            details?.quotations.map((quotation, index) =>
                <p key={index}>• « {quotation} »</p>
            )
        }
    </div>
}