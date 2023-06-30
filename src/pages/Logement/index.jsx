/* Import */

import { useParams } from 'react-router-dom'
import data from '../../utils/data.json'
import Error from '../Error'

/* Composants */

import Slideshow from '../../components/Slideshow'
import Ranking from '../../components/Ranking'
import Owner from '../../components/Owner'
import Collapse from '../../components/Collapse'

function Logement() {
    // Récupération de l'id
    const { id } = useParams()
    try {
        // Vérification de l'id
        const getLogements = data.find((object) => object.id === id)

        // Récupération des tags
        const tags = getLogements.tags

        // Récupération et affichage des équipements
        const equipments = getLogements.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
        ))

        return (
            <main className="logementsContainer" key={id}>
                <section className="sliderContainer">
                    <Slideshow className="slider" slides={getLogements} />
                </section>
                <section className="infoContainer">
                    <div className="titleTagContainer">
                        <div>
                            <h1>{getLogements.title}</h1>
                            <h2>{getLogements.location}</h2>
                        </div>
                        <div className="tagContainer">
                            {tags.map((tag, i) => (
                                <p className="tagText" key={i}>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="rankingAndOwnerContainer">
                        <div>
                            <Ranking score={getLogements.rating} />
                        </div>
                        <div>
                            <Owner
                                ownerName={getLogements.host.name}
                                ownerPicture={getLogements.host.picture}
                            />
                        </div>
                    </div>
                </section>
                <section className="descAndEquipContainer">
                    <Collapse
                        title="Description"
                        description={getLogements.description}
                    />
                    <Collapse title="Equipements" description={equipments} />
                </section>
            </main>
        )
    } catch (err) {
        return <Error />
    }
}

export default Logement
