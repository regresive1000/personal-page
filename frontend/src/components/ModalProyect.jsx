import styles from "../public/styles/ModalProyect.module.scss";


const ModalProyect = ({bsTarget, imagen, title, descripcion}) => {
  return (
    <div className={`${styles.modal} modal fade`} id={bsTarget} tabIndex="-1" aria-labelledby={`${bsTarget}Label`} aria-hidden="true">
    
        <div className={` ${styles.modalDialog} modal-dialog modal-dialog-centered`}>
            
            <div className={` ${styles.modalContent} modal-content`}>

            {/* 
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
             */}
             
            <div className="modal-body row d-flex flex-column">
                <div className="col-12">  
                    <img className={styles.imagen} src={imagen} alt="" />
                </div>
                <div className="col-12 d-flex align-items-center flex-column justify-content-between">
                    <h4 className={` ${styles.h4} modal-title fs-3 m-0 mt-2 mb-3 justify-self-start`} id={`${bsTarget}Label`}>{title}</h4>
                    <p className={styles.p}>{descripcion}</p>
                    <div className={styles.botones}>
                        <button type="button" class={`${styles.cerrar}`} data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    
    </div>
  )
}

export default ModalProyect