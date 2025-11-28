import {useSelector} from "react-redux";
import {getReadingsList} from "../../app/selectors.js";

export const ReadingsList = () => {

    const readings = useSelector(getReadingsList);

    return <div className="ReadingsList">
        <ol className="test">
            {
                readings?.map((reading, index) =>
                    <li id={index}>{reading.bookTitle} de {reading.bookAuthor} --- {reading.rating}⭐</li>
                )
            }
        </ol>
    </div>
}