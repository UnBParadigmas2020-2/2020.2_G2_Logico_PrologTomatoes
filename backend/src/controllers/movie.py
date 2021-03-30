from pyswip import Prolog, Query


def get_movie(data):

    prolog = Prolog()

    prolog.consult('../prolog/movieClassifier.pl')

    query = f'movie_recommendation(Y, {data["lengh"]}, {data["age"]}, "{data["genre"]}").'

    results = list(prolog.query(query))

    if results:
        response = str(results[0]['Y']).split("'")[1]
        status = 200
    else:
        response = 'Não foi possível encontrar um filme com essas preferências.'
        status = 404
    
    return response, status
