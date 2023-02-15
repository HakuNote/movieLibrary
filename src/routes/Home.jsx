import { useState, useEffect } from 'react'
import Movie from '../components/Movie'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json()
        setMovies(json.data.movies)
        setLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    <h1>DIG</h1>
                    
                    {movies.map((movie, index) => (
                        <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summaray={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home