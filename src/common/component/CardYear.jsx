export const CardYear = ({ year, numberOfBooks }) => {

    return <div className="CardYear">
        <h2>{year}</h2>
        <span>Nombre de livres lus : </span>
        <span>{numberOfBooks}</span>
    </div>
}
