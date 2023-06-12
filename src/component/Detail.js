import React from "react";
import { Link, useParams } from 'react-router-dom'
import { Films } from "../shared/ListOfFilms";



function Detail() {

    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });

    return (
        <>
            <div className='container'>
                <div className='product-card'>
                    <div className='badge'> {film.Title}</div>
                    <div className='product-tumb'>
                        <img src={`../${film.Image}`} alt='' />
                    </div>
                    <div className='product-details'>
                        <h4>Nation: {film.Nation}</h4>
                        <div className='product-years'>Year: {film.Year}</div>
                        <p>Information: {film.Info}</p>
                    </div>
                </div>
            </div>

            <Link to={'/'}>
                <button style={{ marginLeft: '10px', color: 'white', background: 'black' }}>Back</button>
            </Link>
        </>

    )
}

export default Detail;