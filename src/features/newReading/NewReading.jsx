import {useState} from "react";
import {useGetFormInformationQuery} from "../../services/NotebookApi.jsx";
import {NewReadingForm} from "./NewReadingForm.jsx";

export const NewReading = () => {

    const [reReading, setReReading] = useState(false);
    const [checked, setChecked] = useState(false);

    const {data:formInformation, isLoading} = useGetFormInformationQuery();

    const handleOnChangeReReading = (event) => {
        if(event.target.value === "true") {
            setReReading(true);
        } else {
            setReReading(false);
        }
        if (!checked) {
            setChecked(true);
        }
    }

    const displayForm = () => {
        if(checked) {
            return <NewReadingForm formInformation={formInformation} reReading={reReading} />
        }
    }

    return !isLoading && <div className="NewReading">
        <h2>Nouvelle lecture</h2>
        <div className="form-reading">
            <fieldset>
                <legend>S'agit-il d'une relecture ?</legend>
                <div>
                    <input type="radio" id="re-reading" name="re-reading" value="true" onChange={handleOnChangeReReading} />
                    <label htmlFor="re-reading">Oui</label>
                </div>
                <div>
                    <input type="radio" id="not-re-reading" name="re-reading" value="false" onChange={handleOnChangeReReading}/>
                    <label htmlFor="not-re-reading">Non</label>
                </div>
            </fieldset>
            {displayForm()}
        </div>
    </div>
}