import {useSelector} from "react-redux";
import {getReadingsList} from "../../app/selectors.js";
import {Link} from "react-router-dom";

export const ReadingsList = () => {

    const readings = useSelector(getReadingsList);

    return <div className="ReadingsList">
        <ol className="list-o-readings">
            {
                readings?.map((reading, index) =>
                    <li key={index} >
                        <Link to={`/reading/${reading.readingId}`}>
                            {reading.bookTitle} de {reading.bookAuthor} --- {reading.rating}⭐
                        </Link>
                    </li>
                )
            }
        </ol>
    </div>
}