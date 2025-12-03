import { Link } from 'react-router-dom';
import {NavigationBar} from "./NavigationBar.jsx";

export const Header = () => {

    return <header>
        <h1 className="title-header">Mon Carnet de Lecture</h1>
        <NavigationBar />
    </header>
}