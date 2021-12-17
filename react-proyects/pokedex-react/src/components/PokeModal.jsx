const PokeModal = ({infoModal, setInfoModal, isOpenModal, setIsOpenModal})=>{

    const closeModal = ()=>{
        setInfoModal({});
        setIsOpenModal(false);
    }

    const types = infoModal.type??[];
    const pokeId = `poke${infoModal.id}`
    const modalClass = isOpenModal?'info-container active':'info-container';

    return(
        <div className={modalClass} data-color={infoModal.color} id={pokeId}>
            <div className="info">
                <span className="btn btn-close" onClick={closeModal}><i className="fa fa-times-circle fa-2x"></i></span>
                <div className="container">
                    <div>                    
                        <div><h1>{infoModal.name}<small>{types.map((t,i) => <span key={i}>{t}</span>)}</small></h1></div>
                        <div className="images">
                            <div className="img">
                                <img src={infoModal.image} alt='' />
                            </div>
                            <div className="imgs">
                                <div><img src={infoModal.imageFront} alt='' /></div>
                                <div><img src={infoModal.imageBack} alt='' /></div>
                            </div>
                        </div>
                        <div className="infomation">
                            <div><h3>Abilities</h3> {infoModal.abilities}</div>
                            <div><h3>Moves</h3> {infoModal.moves}</div>
                        </div>
                    </div>            
                    <div className="bg"><span className="num">{infoModal.id}</span></div>
                </div>
            </div>
        </div>
    )
}


export default PokeModal;