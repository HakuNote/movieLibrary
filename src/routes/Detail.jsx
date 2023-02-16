import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Detail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([])


    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        console.log("movie => ", json.data.movie)
        setDetail(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : <div>
                <img src={detail.medium_cover_image} alter={detail.title} />
                <h1> {detail.title} </h1>
                <p>Relesed: {detail.year}</p>
                <p>Rating: {detail.rating}</p>
                <p>Runtime: {detail.runtime}</p>
                <ul>
                    {detail.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )

}

export default Detail


