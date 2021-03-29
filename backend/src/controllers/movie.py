from pyswip import Prolog, Query, Variable, Functor

prolog = Prolog()

prolog.consult('../../../movieClassifier.pl')

Y = Variable()

results = list(prolog.query("movie_recommendation(Y, 3, 1)"))

print(results[0]['Y'])
