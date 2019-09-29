import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias: []
   }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4ae9cbbf562f4e00ae2ca027f2942eb4`;
    
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias.articles);

    this.setState({
      noticias: noticias.articles
    })
  }

  render() { 

    const  titulo = 'Api Noticias en React';

    return ( 
      <Fragment>
        <Header titulo={titulo} />
       
        <div className="container white contenedor-noticias">
        <Formulario consultarNoticias={this.consultarNoticias} />
          <Noticias noticias={this.state.noticias} />
        </div>
      </Fragment>
     );
  }
}
 
export default App;
