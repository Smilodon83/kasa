import star from './../assets/star.png'
import fullStar from './../assets/fullStar.png'

function Ranking({ score }) {
    const ranks = [1, 2, 3, 4, 5]
    return (
        <div className="stars">
            {ranks.map((rank) =>
                score >= rank ? (
                    <img
                        className="rankImg"
                        key={rank.toString()}
                        src={fullStar}
                        alt="Ranking star"
                    />
                ) : (
                    <img
                        className="rankImg"
                        key={rank.toString()}
                        src={star}
                        alt="Ranking star"
                    />
                )
            )}
        </div>
    )
}

export default Ranking
