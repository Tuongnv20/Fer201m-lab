import React from "react";


const ModalCase = ({ setIsOpen, film }) => {
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: "35%" }}>
                <div className="modal-content">
                    <h4>Video for {film.Title}</h4>
                    <p><iframe width="800" height="375" src={film.Clip} title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
                </div>
                <div className="modal-footer">
                    {/* <a className="modal-close waves-effect waves-green btn-flat"><Icon>close</Icon></a> */}
                    <a class="waves-effect waves-light  btn"><i class="material-icons left">close</i>CLose</a>
                </div>
            </div>
        </div>
    )
}
export default ModalCase;