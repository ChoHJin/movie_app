import React from 'react'
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return (
        <h5>{title}</h5>
    )
}

Movie.PropTypes = {

    id : PropTypes.number.isRequired,
    <i class="fas fa-yandex-international    "></i> : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired


}


export default Movie
