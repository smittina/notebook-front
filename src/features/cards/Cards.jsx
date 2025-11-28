import { useGetAllBooksQuery } from "../../services/NotebookApi.jsx";
import {CardYear} from "./CardYear.jsx";


export const Cards = () => {

    const { data: listOfBooks, isLoading } = useGetAllBooksQuery();

    return !isLoading && <div className="Cards">
        {
            listOfBooks?.map((book, index) =>
                <CardYear id={index} year={book.year} numberOfBooks={book.numberOfReadings} />
            )
        }
    </div>

}