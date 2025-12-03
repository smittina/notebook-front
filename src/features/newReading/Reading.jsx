import {createRef, useState} from "react";

export const Reading = ({formInformation}) => {

    const [saga, setSaga] = useState(false);
    const [status, setStatus] = useState("inProgress");
    const [quotations, setQuotations] = useState([]);

    const quote = createRef();


    const getGenresOptions = () => {
        return formInformation?.genres.map((genre, index) =>
            <option value={genre} key={index}>{genre}</option>
        )
    }

    const getTropesOptions = () => {
        return formInformation?.tropes.map((trope, index) =>
            <option value={trope} key={index}>{trope}</option>
        )
    }

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

    const displaySagaInformations = () => {
        return saga ?
            "visibleField"
            :
            "unVisibleField";
    }

    const addNewReading = (formData) => {
        const title = formData.get("title");
        console.log("Le titre du livre est :"+title);
        const authorName = formData.get("authorName")
        console.log("Le nom de l'auteur est :"+authorName);
        const synopsis = formData.get("synopsis");
        console.log("Synopsis :"+synopsis);
        const genres = formData.getAll("genres");
        console.log("Genres : "+genres);
        const tropes = formData.getAll("tropes");
        console.log("Tropes : "+tropes);
        const pageNumber = formData.get("pageNumber");
        console.log("Page Number : "+pageNumber);

        // TODO - POST CALL TO READINGS/CREATE FROM NOTEBOOK API

    }

    return <>
        <form action={addNewReading}>
            <fieldset>
                <legend>Entrez le titre du livre :</legend>
                <input type="text" name="title" />
            </fieldset>
            <fieldset>
                <legend>Entrez le nom de l'auteur :</legend>
                <input type="text" name="authorName" />
            </fieldset>
            <fieldset>
                <legend>Synopsis :</legend>
                <textarea name="synopsis" />
            </fieldset>
            <fieldset>
                <legend>Genres :</legend>
                <select
                    name="genres"
                    multiple={true}
                >
                    { getGenresOptions() }
                </select>
            </fieldset>
            <fieldset>
                <legend>Tropes :</legend>
                <select
                    name="tropes"
                    multiple={true}
                >
                    { getTropesOptions() }
                </select>
            </fieldset>
            <fieldset>
                <legend>Nombre de pages :</legend>
                <input type="number" name="pageNumber"/>
            </fieldset>
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
            <fieldset>
                <legend>Type de lecture :</legend>
                <select name="typeOfReading">
                    <option name="hardback">Relié</option>
                    <option name="paperback">Broché</option>
                    <option name="audio">Livre Audio</option>
                    <option name="ebook">E-book</option>
                </select>
            </fieldset>
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
            <fieldset>
                <legend>Statut :</legend>
                <select name="status" onChange={handleOnChangeStatus}>
                    <option name="in-progress">En cours</option>
                    <option name="finished">Terminé</option>
                    <option name="dnf">Abandonné</option>
                </select>
            </fieldset>
            { displayFieldSetFromStatus() }
            <fieldset>
                <legend>Citations :</legend>
                <div>
                    <textarea
                        ref={quote}
                        name="quotations"
                    />
                    <p><button onClick={addQuotation}>Ajouter une citation préférée</button></p>
                </div>
            </fieldset>
            <button type="submit">Ajouter</button>
        </form>
    </>
}