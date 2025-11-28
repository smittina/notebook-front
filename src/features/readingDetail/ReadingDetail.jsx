import {useGetReadingDetailsQuery} from "../../services/NotebookApi.jsx";
import {useParams} from 'react-router'

export const ReadingDetail = () => {

    let param = useParams();
    console.log(param.id);

    const {data: details, isLoading} = useGetReadingDetailsQuery(param.id);

    return !isLoading && <div>
        READING DETAIL PAGE
        <p> Titre du livre : {details?.title} - Auteur : {details?.authorName} </p>
    </div>
}