import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navigation = ({id, data, incId, decId}) => {

    return (
        <nav className="navigation">
            {id > 1 ?
            <Link
                to={`/card/${id - 1}`}
                className="navigation__link navigation__link--right"
                onClick={decId}>    
                &lt; Предыдущая
            </Link>
            : null    
            }   
            {id < data.length ?
            <Link
                to={`/card/${id + 1}`}
                className="navigation__link"
                onClick={incId}>       
                Следующая &gt;
            </Link>
            : null    
            }            
        </nav>
    )
}

Navigation.propTypes = {
    id: PropTypes.number,
    data: PropTypes.array,
    incId: PropTypes.func,
    decId: PropTypes.func
}

export default Navigation

