export const GET_MOVIES = `
    query GetMovies {
        movies(first: 10) {
            nodes {
                title
                movieFields {
                    details
                }
            }
        }
    }
`;

export const GET_MOVIE = `
    query GetMovie($id: ID!) {
        movie(id: $id, idType: DATABASE_ID) {
            date
            title(format: RAW)
            content
            movieCustomFields {
                movieType
            }
        }
    }
`;

export const GET_REVIEWS = `
    query GetReviews {
        reviews(first: 10) {
            nodes {
                title
                reviewFields {
                    content
                }
            }
        }
    }
`;

export const GET_SERVICES = `
    query GetServices {
        services(first: 10) {
            nodes {
                title
                serviceFields {
                    description
                }
            }
        }
    }
`;


export const GET_SERVICE = `
    query GetService($id: ID!) {
        service(id: $id, idType: DATABASE_ID) {
            customFieldForService {
                carWashLocation
                carWashContactNumber
                carWashPerson
                carWashPrice
                carWashType
            }
            title
        }
    }
`;