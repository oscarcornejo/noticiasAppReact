import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';


const Noticias = ({noticias}) => {
    return ( 
        <div className="row">
            {
                noticias.map( (noticia, index) => {
                    return(
                        <Noticia key={index} noticia={noticia}/>
                    )
                })
            }
        </div>
     );
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default Noticias;