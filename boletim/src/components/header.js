import "./header.css"

export const Header = ({name}) => {
    return(
    <header className= "box">
        <h1>Olá, {name} </h1>
        <h4>Seja, bem vindo !!</h4> 
    
    </header>
    )
    
}