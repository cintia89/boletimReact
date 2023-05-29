import { Header } from "./components/header";
import { Boletim } from "./components/boletim";
import "./App.css"
import { Footer } from "./components/footer";

 const App = () =>{
  return (
    <>
    <Header name="Antônio"/>
      <div className="container">
        <Boletim 
              title={"Primeiro bimestre"}
              nota1={6} 
              nota2={7.1} 
              nota3={9.4}/>

        <Boletim 
              title={"Segundo bimestre"}
              nota1={8.8} 
              nota2={7.6} 
              nota3={9.0}/>

        <Boletim 
              title={"Terceiro bimestre"}
              nota1={6} 
              nota2={5.1} 
              nota3={10}/>

        <Boletim 
              title={"Quarto bimestre"}
              nota1={7.9} 
              nota2={6.0} 
              nota3={10}/>
      </div>
    < Footer />      
            
    </>
  );
}

export default App;
