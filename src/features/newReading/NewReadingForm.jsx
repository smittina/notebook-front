import {createRef, useState} from "react";
import {createBody} from "../../utils/Utils.jsx";
import {useLazyCreateNewReadingQuery} from "../../services/NotebookApi.jsx";

export const NewReadingForm = ({formInformation, reReading}) => {

    const [saga, setSaga] = useState(false);
    const [status, setStatus] = useState("inProgress");
    const [quotations, setQuotations] = useState([]);

    const quote = createRef();

    const [createNewReading] = useLazyCreateNewReadingQuery();

    const handleOnChangeSaga = (event) => {
        if(event.target.value === "true") {
            setSaga(true);
        } else {
            setSaga(false);
        }
    }

    const handleOnChangeStatus = (event) => {
        switch(event.target.value) {
            case "Terminé":
                setStatus("finished");
                break;
            case "En cours":
                setStatus("inProgress")
                break;
            case "Abandonné":
                setStatus("dnf");
                break;
            default: console.log("Error with onChangeStatus, value not recognized : "+event.target.value)
        }
    }

    const addQuotation = () => {
        let quoteVal = quote.current.value;
        setQuotations([...quotations, quoteVal])
    }

    const displaySagaInformations = () => {
        return saga ?
            "visibleField"
            :
            "unVisibleField";
    }

    const displayFieldSetFromStatus = () => {
        if(status === "inProgress" || status === "dnf") {
            return <fieldset>
                <legend>Page courante</legend>
                <input type="number" name="currentPage" />
            </fieldset>
        } else {
            return <fieldset>
                <legend>Note</legend>
                <input
                    type="number"
                    name="rating"
                    min="0"
                    max="6"
                />
            </fieldset>

        }
    }

    const addNewReading = (formData) => {
        const body = createBody(formData, formInformation, quotations, reReading)
        console.log(JSON.stringify(body));
        createNewReading(body);
        setQuotations([]);
    }

    return <form action={addNewReading}>
        {/*BOOK TITLE AND AUTHOR*/}
        {
            reReading ?
                <>
                    <fieldset>
                         <legend>Sélectionnez un livre existant ci-dessous :</legend>
                         <select name="title-reReading">
                             {
                                 formInformation?.books?.map((book) =>
                                     <option key={`bookTitle-${book.id}`} value={book.title}>{book.title}</option>
                                 )
                             }
                         </select>
                     </fieldset>
                     <fieldset>
                         <legend>Selectionnez un auteur existant ci-dessous :</legend>
                         <select name="authorName-reReading">
                             {
                                 formInformation?.authors?.map((author) =>
                                     <option key={`authorName-${author.id}`} value={author.name}>{author.name}</option>
                                 )
                             }
                         </select>
                     </fieldset>
                </>
                :
                <>
                     <fieldset>
                     <legend>Entrez le titre du livre :</legend>
                     <input type="text" name="title" />
                     </fieldset>
                     <fieldset>
                         <legend>Entrez le nom de l'auteur :</legend>
                         <input type="text" name="authorName" />
                     </fieldset>
                </>
        }
        {/*SYNOPSIS*/}
        <fieldset>
            <legend>Synopsis :</legend>
            <textarea name="synopsis" />
        </fieldset>
        {/*GENRES*/}
        <fieldset>
            <legend>Genres :</legend>
            <select
                name="genres"
                multiple={true} >
                {
                    formInformation?.genres.map((genre, index) =>
                        <option value={genre} key={index}>{genre}</option>
                    )
                }
            </select>
        </fieldset>
        {/*TROPES*/}
        <fieldset>
            <legend>Tropes :</legend>
            <select
                name="tropes"
                multiple={true} >
                {
                    formInformation?.tropes.map((trope, index) =>
                        <option value={trope} key={index}>{trope}</option>
                    )
                }
            </select>
        </fieldset>
        {/*PAGE NUMBER*/}
        <fieldset>
            <legend>Nombre de pages :</legend>
            <input type="number" name="pageNumber"/>
        </fieldset>
        {/*SAGA*/}
        <fieldset>
            <legend>Saga :</legend>
            <label>S'agit-il d'une saga ?</label>
            <div>
                <input type="radio" id="saga" name="saga" value="true" onChange={handleOnChangeSaga} />
                <label htmlFor="saga">Oui</label>
            </div>
            <div>
                <input type="radio" id="not-saga" name="saga" value="false" onChange={handleOnChangeSaga}/>
                <label htmlFor="not-saga">Non</label>
            </div>
            <div className={displaySagaInformations()}>
                <input type="checkbox" id="allTomePublished" name="allTomePublished" />
                <label>Tous les tomes sont publiés ?</label>
            </div>
            <div className={displaySagaInformations()}>
                <label htmlFor="numberOfTome">De quel tome s'agit-il ?</label>
                <input type="number" name="numberOfTome" />
            </div>
        </fieldset>
        {/*READING TYPE*/}
        <fieldset>
            <legend>Type de lecture :</legend>
            <select name="typeOfReading">
                <option name="hardback">Relié</option>
                <option name="paperback">Broché</option>
                <option name="audio">Livre Audio</option>
                <option name="ebook">E-book</option>
            </select>
        </fieldset>
        {/*DATES*/}
        <fieldset>
            <legend>Dates</legend>
            <p>
                <label htmlFor="stating">Date de Début de lecture : </label>
                <input
                    type="date"
                    id="starting"
                    name="starting"
                    max={new Date().toISOString().split("T")[0]}
                />
            </p>
            <p>
                <label htmlFor="finished">Date de Fin de lecture : </label>
                <input
                    type="date"
                    id="finished"
                    name="finished" />
            </p>
        </fieldset>
        {/*STATUS*/}
        <fieldset>
            <legend>Statut :</legend>
            <select name="status" onChange={handleOnChangeStatus}>
                <option name="in-progress">En cours</option>
                <option name="finished">Terminé</option>
                <option name="dnf">Abandonné</option>
            </select>
        </fieldset>
        {/*RATINGS OR PROGRESS*/}
        { displayFieldSetFromStatus() }
        <fieldset>
            <legend>Citations :</legend>
            <div>
                    <textarea
                        ref={quote}
                        name="quotations"
                    />
                <p><button type="button" onClick={addQuotation}>Ajouter une citation préférée</button></p>
            </div>
        </fieldset>
        {/*SUBMIT*/}
        <button type="submit">Ajouter</button>
    </form>
}