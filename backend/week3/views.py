from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


MAX_NUMBER_OF_CANDIDATES = 9
# todo dictionary


@api_view(['POST'])
def plurality(request):
    try:
        # receive an array of candidates from the request
        candidates = request.data['candidates']

        number_of_candidates = len(candidates)
        if number_of_candidates > MAX_NUMBER_OF_CANDIDATES:
            return Response({"message": "maximum number of candidates"})


    except Exception as error:
        return Response({"message": str(error)})