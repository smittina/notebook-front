import {useLazyGetYearDetailsQuery} from "../../services/NotebookApi.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {readingsListSlice} from "../readings/readingsListSlice.jsx";
import {cardYearSlice} from "./cardYearSlice.jsx";
import {getCurrentCard} from "../../app/selectors.js";

export const CardYear = ({ id, year, numberOfBooks }) => {

    const dispatch = useDispatch();
    const [getYearDetails, {data: readings, isLoading}] = useLazyGetYearDetailsQuery();

    const currentCard = useSelector(getCurrentCard);
    const isSelected = () => {
        return currentCard === id;
    }

    const handleOnSelectYearDetails = () => {
        getYearDetails(year);
        dispatch(cardYearSlice.actions.addCurrentCard(id));
    }

    useEffect(() => {
        if(!isLoading && readings) {
            dispatch(readingsListSlice.actions.addReadings(readings))
        }
    }, [readings, handleOnSelectYearDetails, isLoading, dispatch]);

    return <div className={isSelected() ? "CarYearSelected" : "CardYear"}>
        <h2>{year}</h2>
        <span>Nombre de livres lus : </span>
        <span>{numberOfBooks}</span>
        <p>
            <button onClick={handleOnSelectYearDetails}>Voir</button>
        </p>
    </div>
}
