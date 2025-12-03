import {useLazyGetReadingConfigQuery, useLazyUpdateReadingConfigQuery} from "../../services/NotebookApi.jsx";
import {createRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {readingConfigSlice} from "./readingConfigSlice.jsx";
import {getGenres, getTropes} from "../../app/selectors.js";

export const ReadingConfig = () => {

    const dispatch = useDispatch();

    const genres = useSelector(getGenres);
    const tropes = useSelector(getTropes);

    const [getReadingConfig, {data: config, isLoading}] = useLazyGetReadingConfigQuery();
    const [updateReadingConfig] = useLazyUpdateReadingConfigQuery();

    const newGenre = createRef();
    const newTrope = createRef();

    const addNewGenre = () => {
        dispatch(readingConfigSlice.actions.addNewGenre(newGenre.current.value));
    }

    const removeGenre = (toRemove) => {
        dispatch(readingConfigSlice.actions.removeGenre(toRemove));
    }

    const addNewTrope = () => {
        dispatch(readingConfigSlice.actions.addNewTrope(newTrope.current.value));
    }

    const removeTrope = (toRemove) => {
        dispatch(readingConfigSlice.actions.removeTrope(toRemove));
    }

    const handleOnSaveConfig = () => {
        updateReadingConfig({
            genres: genres,
            tropes: tropes,
        });
    }

    useEffect(() => {
        getReadingConfig()
        if(!isLoading && config) {
            dispatch(readingConfigSlice.actions.addConfig(config));
        }
    }, [config, dispatch, getReadingConfig, isLoading]);

    return !isLoading && <div>
        <h1>PARAMETRES</h1>
        <h2>Liste des Genres existants :</h2>
        {
            genres?.map((genre, index) => {
                return <div key={index}>
                    <span>{genre}</span>
                    <button type="button" onClick={() => removeGenre(genre)}>❌</button>
                </div>
            })
        }
        <input ref={newGenre} type="text" name="genre" />
        <button type="button" onClick={addNewGenre}>Ajouter un nouveau genre</button>
        <h2>Liste des Tropes existants :</h2>
        {
           tropes?.map((trope, index) => {
                return <div key={index}>
                    <span>{trope}</span>
                    <button type="button" onClick={() => removeTrope(trope)}>❌</button>
                </div>
            })
        }
        <input ref={newTrope} type="text" name="trope" />
        <button type="button" onClick={addNewTrope}>Ajouter un nouveau trope</button>
        <div>
            <button type="button" onClick={handleOnSaveConfig}>Sauvegarder la Configuration</button>
        </div>
    </div>
}