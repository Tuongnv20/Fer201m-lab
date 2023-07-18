import React from "react";
import { Link, useParams } from 'react-router-dom'
import { Films } from "../shared/ListOfFilms";
import ModalCase from "./ModalCase";
import { Icon, CardTitle, Row, Col, Card, Container, Button } from 'react-materialize'
import { useState } from "react";

function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });

    return (
        // Phần này load data NOT using Materialize
        // <>
        //     <div className='container'>
        //         <div className='product-card'>
        //             <div className='badge'> {film.Title}</div>
        //             <div className='product-tumb'>
        //                 <img src={`../${film.Image}`} alt='' />
        //             </div>
        //             <div className='product-details'>
        //                 <h4>Nation: {film.Nation}</h4>
        //                 <div className='product-years'>Year: {film.Year}</div>
        //                 <p>Information: {film.Info}</p>
        //             </div>
        //         </div>
        //     </div>

        //     <Link to={'/'}>
        //         <button style={{ marginLeft: '10px', color: 'white', background: 'black' }}>Back</button>
        //     </Link>
        // </>

        //Load data Using Materialize

        <Container>
            <Row>
                <Col
                    m={12}
                    s={12}
                >
                    <Card
                        style={{ background: "rgb(54, 161, 183)" }}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={`../${film.image}`} style={{ width: "100%", height: "100%" }}>{film.Title}</CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        <div className="film-nation" style={{ fontSize: "25px" }}>Nation: {film.nation}</div>
                        <div className="film-year" style={{ fontSize: "20px", fontWeight: "600" }}>Year: {film.year}</div>
                        <div className="film-description" style={{ fontSize: "20px", fontWeight: "600" }}>Description: {film.info}</div>
                        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                            <Icon>ondemand_video</Icon>
                        </a>
                        {/* {console.log("setIsOpen", isOpen)} */}
                        {isOpen &&
                            <ModalCase setIsOpen={setIsOpen} film={film} />
                        }
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Detail;