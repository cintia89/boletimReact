import "./boletim.css"

export const Boletim =({nota1, nota2, nota3, title})=> {
    const media = (nota1 + nota2 + nota3) / 3 
    return (
        <section className="boletim-container">
            <h1>{title}</h1>
            <p><strong>Prova1:</strong> <span>{nota1}</span></p>
            <p><strong>Prova2:</strong> <span>{nota2}</span></p>
            <p><strong>Prova3:</strong> <span>{nota3}</span></p>
            <p className="media"> <strong> Média : </strong> <span>{media.toFixed(1)}</span> </p>
        </section>
    )
}