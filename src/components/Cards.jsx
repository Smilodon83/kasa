import PropTypes from 'prop-types'

function Card({ cover, title }) {
    return (
        <div className="cardItem">
            <div className="cardWrapper">
                <img
                    className="cardCover"
                    src={cover}
                    alt="Couverture du Logement"
                />
                <p className="cardTitle">{title}</p>
            </div>
        </div>
    )
}

//Sécurisation des Props

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}
Card.defaultProps = {
    title: 'Titre par défaut',
}

export default Card
