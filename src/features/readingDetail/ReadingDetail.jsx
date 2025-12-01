import {useGetReadingDetailsQuery} from "../../services/NotebookApi.jsx";
import {useParams} from 'react-router'
import {ReadingDetailsBook} from "./ReadingDetailsBook.jsx";
import {ReadingDetailsInfo} from "./ReadingDetailsInfo.jsx";

export const ReadingDetail = () => {

    let param = useParams();

    const {data: details, isLoading} = useGetReadingDetailsQuery(param.id);

    return !isLoading && <div className="ReadingDetails">
        <h1>{details?.title}</h1>
        <div className="details-wrapper">
            <ReadingDetailsBook details={details} />
            <ReadingDetailsInfo details={details} />
        </div>
    </div>
}