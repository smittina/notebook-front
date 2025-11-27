import { useGetAllBooksQuery } from "../../services/NotebookApi.jsx";
import {CardYear} from "../../common/component/CardYear.jsx";


export const Cards = () => {

    const { data: listOfBooks, isLoading } = useGetAllBooksQuery();

    return !isLoading && <div className="Cards">
        {
            listOfBooks?.map((book) =>
                <CardYear year={book.year} numberOfBooks={book.numberOfReadings} />
            )
        }
    </div>

}