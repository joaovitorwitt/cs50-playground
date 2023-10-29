from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import Readability, Caesar, Substitution

import string
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
            return Response({"Grade": "Before 1", "index": index})
        elif index >= 16:
            return Response({"Grade": "Above 16", "index": index})
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
    


# caesar
@api_view(['POST'])
def caesar(request):
    try:
        plaintext = request.data['plaintext']
        key = request.data['key']

        cipher = []

        if type(key) != int:
            return Response({"message": "invalid cipher"})

        if type(plaintext) != str:
            return Response({"message": "invalid plaintext"})   

        # rotate characters here
        for char in str(plaintext):
            if char.isupper():
                char_to_int = (ord(char) - ord("A") + key) % 26
                int_to_char = chr(char_to_int + ord("A"))
                cipher.append(int_to_char)

            elif char.islower():
                char_to_int = (ord(char) - ord("a") + key) % 26
                int_to_char = chr(char_to_int + ord("a"))
                cipher.append(int_to_char)
            
            elif char.isspace():
                cipher.append(char)

            elif not char.isalnum():
                cipher.append(char)

        return Response({"ciphertext": "".join(cipher)})

    except Exception as error:
        return Response({"message": str(error)})
    


@api_view(['POST'])
def substitution(request):
    try:
        key = request.data['key']
        plaintext = request.data['plaintext']

        # check for key length
        if len(key) != 26:
            return Response({"message": "key must contain 26 characters"})
        
        # check if characters are actual letters
        for char in key:
            if not char.isalpha():
                return Response({"message": "Invalid characters"})
            
        # check for duplicates
        if Substitution.has_duplicates(key):
            return Response({"message": "there is duplicates"})
        

        ciphertext = []

        for char in plaintext:
            if char.isupper():
                current_index = ord(char) - ord("A")
                ciphertext.append(key[current_index].upper())

            elif char.islower():
                current_index = ord(char) - ord("a")
                ciphertext.append(key[current_index].lower())

            else:
                ciphertext.append(char)

        return Response({"ciphertext": "".join(ciphertext)})
    except Exception as error:
        return Response({"message": str(error)})