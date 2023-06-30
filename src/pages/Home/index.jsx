//Imports
import { Link } from 'react-router-dom'
import data from '../../utils/data.json'
import bannerImg from '../../assets/bannerHome.png'

//Composants
import Banner from '../../components/Banner'
import Card from '../../components/Cards'

function Home() {
    return (
        <main>
            <Banner title="Chez vous, partout et ailleurs" cover={bannerImg} />
            <div className="cardsContainer">
                {data.map((logement, id) => (
                    <div key={id}>
                        <Link to={`/logements/${logement.id}`}>
                            <Card
                                cover={logement.cover}
                                title={logement.title}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Home
