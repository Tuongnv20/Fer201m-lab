// import React, { Component } from "react";
// import { Films } from "../shared/ListOfFilms";
// import { useState } from "react";
// import { Link } from "react-router-dom";



// export default function Film() {
//     const [film, setFilm] = useState([]);
//     return (

//         <div className='container'>
//             {Films.map((f) => (
//                 <div className='column' key={f.id}>
//                     <div className='card'>
//                         <img src={f.Image} />
//                         <h3 className="title">{f.Title}</h3>
//                         <p >{f.Nation}</p>
//                         <p >{f.Year}</p>
//                         {/* <button onClick={() => { setFilm(f) }}> // Button để popup.
//                             <a href='#popup1' id='openPopUp'>Detail</a>
//                         </button> */}
//                         <Link to={`detail/${f.id}`}>
//                             <p><button>Detail</button></p>
//                         </Link>
//                     </div>
//                 </div>
//             ))}

//             {/* <div id='popup1' className="overlay" > // Phần này là phần khi click zo detail sẽ popup lên màn hình.
//                 <div className="popup">
//                     <img src={film.Image} />
//                     <h2>{film.Title}</h2>
//                     <a className="close" href="#">&times;</a>
//                     <div className="content">
//                         {film.Info}
//                     </div>
//                 </div>
//             </div> */}

//         </div>

//     )

// }

// Film.js using Materialize

import React from "react";
import { Films } from "../shared/ListOfFilms";
import { Link } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'


export default function Film() {
    return (
        <div className="film-main">


            <Container>
                {Films.map((f =>
                    <Row>
                        <Col
                            m={12}
                            s={12}
                        >
                            <Card

                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={f.image} reveal waves="light" />}
                                reveal={<p>Click on "Detail" for more information.<br />{<Icon>info_outline</Icon>}</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title={f.title}
                            >
                                <div>Nation: {f.nationation}</div>
                                <div>Year: {f.yearear}</div>
                                <Link to={`detail/${f.id}`}>
                                    <p><button>Detail</button></p>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )

}