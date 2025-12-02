import {useState} from "react";
import {ReReading} from "./ReReading.jsx";
import {Reading} from "./Reading.jsx";
import {useGetFormInformationQuery} from "../../services/NotebookApi.jsx";

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

    const getFormComponent = () => {
        if (checked) {
            return reReading ?
                <ReReading formInformation={formInformation}/>
                :
                <Reading formInformation={formInformation}/>
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
            { getFormComponent() }
        </div>
    </div>
}