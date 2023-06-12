import React, { Component } from "react";
import { Films } from "../shared/ListOfFilms";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Film() {
    const [film, setFilm] = useState([]);
    return (

        <div className='container'>
            {Films.map((f) => (
                <div className='column' key={f.id}>
                    <div className='card'>
                        <img src={f.Image} />
                        <h3 className="title">{f.Title}</h3>
                        <p >{f.Nation}</p>
                        <p >{f.Year}</p>
                        {/* <button onClick={() => { setFilm(f) }}>
                            <a href='#popup1' id='openPopUp'>Detail</a>
                        </button> */}
                        <Link to={`detail/${f.id}`}>
                            <p><button>Detail</button></p>
                        </Link>
                    </div>
                </div>
            ))}
            {/* <div id='popup1' className="overlay" >
                <div className="popup">
                    <img src={film.Image} />
                    <h2>{film.Title}</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        {film.Info}
                    </div>
                </div>
            </div> */}

        </div>

    )

}
