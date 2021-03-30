from flask import Blueprint, request
from controllers import movie

from flask_cors import CORS


movie_blueprint = Blueprint('movie', __name__)
CORS(movie_blueprint)


@movie_blueprint.route('/api/movie/', methods=['GET'])
def movie_recomendation():

    data = request.json

    response, status = movie.get_movie(data)

    return response, status