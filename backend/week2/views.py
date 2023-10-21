from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import Readability


# Create your views here.

# readability
@api_view(['POST'])
def readability(request):
    try:
        string_from_request = request.data['string']

        letters = Readability.count_letters(string_from_request)
        words = Readability.count_words(string_from_request)
        sentences = Readability.count_sentences(string_from_request)

        L = letters / float(words) * 100
        S = sentences / float(words) * 100

        index = 0.0588 * L - 0.296 * S - 15.8

        if index < 1:
            return Response({"Grade": "Before Grade 1"})
        elif index >= 16:
            return Response({"Grade": "Grade 16+"})
        else:
            return Response({"Grade": round(index)})

    except Exception as error:
        return Response({"message": str(error)})


@api_view(['POST'])
def bulbs(request):
    try:
        BITS_IN_BYTE = 8
        binary_quote = []
        quote = request.data['string']

        def print_bulb(bit):
            if bit == 0:
                # Dark emoji
                return "\U000026AB"
            elif bit == 1:
                # Light emoji
                return "\U0001F7E1"

        for char in quote:
            char_to_int = ord(char)
            binary_char = []

            while char_to_int > 0:
                binary_char.insert(0, char_to_int % 2)
                char_to_int //= 2

            # Pad with leading zeros to ensure it's 8 bits long
            while len(binary_char) < BITS_IN_BYTE:
                binary_char.insert(0, 0)

            binary_quote.append(''.join([print_bulb(bit) for bit in binary_char]))

        return Response(binary_quote)

    except Exception as error:
        return Response({"message": str(error)})