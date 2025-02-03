import client from '@/lib/graphql-client';
import { GET_MOVIE } from '@/lib/queries';

const MovieDetailsPage = async ({ params: { id } }) => {

    const data = await client.request(GET_MOVIE, { id });
    const movie = data?.movie;

    if (!movie) {
        return <h1>Movie not found</h1>;
    }

    return (
        <div>
            <h1>{movie.title || "Untitled Movie"}</h1>
            <p><strong>Release Date:</strong> {new Date(movie.date).toLocaleDateString()}</p>
            <h1>{movie?.movieCustomFields?.movieType}</h1>
            <div dangerouslySetInnerHTML={{ __html: movie.content }} />
        </div>
    );
};

export default MovieDetailsPage;