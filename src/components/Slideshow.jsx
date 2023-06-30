/* Import */

import { useState } from 'react'

/* Icons */
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

function Slideshow({ slides }) {
    //Stockage de l'état
    const [currentPicture, setCurrentPicture] = useState(0)

    //Navigation
    const next = () => {
        if (currentPicture + 1 >= slides.pictures.length) {
            setCurrentPicture(0)
        } else {
            setCurrentPicture(currentPicture + 1)
        }
    }

    const prev = () => {
        if (currentPicture + 1 <= 1) {
            setCurrentPicture(slides.pictures.length - 1)
        } else {
            setCurrentPicture(currentPicture - 1)
        }
    }

    return (
        <div className="slidesContainer">
            <div className="carrouselPictures">
                <img src={slides.pictures[currentPicture]} alt="slide" />
            </div>
            {/* Si le logement contient plus d'une image affichage des fleche de navigation et du compteur */}
            {slides.pictures.length > 1 && (
                <>
                    <div className="carrouselNavigation">
                        <div className="navigationLeft">
                            <FaChevronLeft onClick={prev} />
                        </div>
                        <div className="navigationRight">
                            <FaChevronRight onClick={next} />
                        </div>
                    </div>
                    <div className="counter">
                        {currentPicture + 1}/{slides.pictures.length}
                    </div>
                </>
            )}
        </div>
    )
}

export default Slideshow
