import {Link} from "react-router-dom";

export const NavigationBar = () => {
    return <nav>
        <ul>
            <li> <Link to="/">Accueil</Link> </li>
            <li> <Link to ={"/new"}>Nouvelle Lecture</Link> </li>
        </ul>
    </nav>
}