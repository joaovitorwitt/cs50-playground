from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


# TODO: Mario Less
"""
input between 1 and 9
display pyramid
have a url parameter that will allow the user to select different types of pyramids
"""
@api_view(['POST'])
def mario_less(request):
    try:
        number_of_rows = request.data['height']

        return Response({"height of pyramid": number_of_rows})
    except Exception as error:
        return Response({"message": "something went wrong"})


# TODO: Mario More

# TODO: Cash

# TODO: Credit