from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .utils import Cash, Credit


# TODO: Mario Less
"""
input between 1 and 9
display pyramid
have a url parameter that will allow the user to select different types of pyramids
"""
@api_view(['POST'])
def mario_less(request):
    try:
        number_of_rows = int(request.data['height'])

        if number_of_rows > 8 or number_of_rows < 1:
            return Response({"message": "height must be between 1 and 8"})
        
        pyramid = []
        for i in range(number_of_rows):
            spaces = " " * (number_of_rows - i - 1)
            hashes = "#" * (i + 1)
            row = spaces + hashes
            pyramid.append(row) 


        return Response({"height of pyramid": number_of_rows, "pyramid": pyramid})
    except Exception as error:
        return Response({"message": "something went wrong"})


# TODO: Mario More
@api_view(['POST'])
def mario_more(request):
    try:
        number_of_rows = int(request.data['height'])
        if number_of_rows > 8 or number_of_rows < 1:
            return Response({"message": "height must be between 1 and 8"})
        
        pyramid = []

        for i in range(1, number_of_rows + 1):
            spaces = " " * (number_of_rows - i)
            hashes1 = "#" * i
            vertical_spaces = "  "
            hashes2 = "#" * i
            row = spaces + hashes1 + vertical_spaces + hashes2
            pyramid.append(row)

        return Response({"height of pyramid": number_of_rows, "pyramid": pyramid})

    except Exception as error:
        return Response({"message": "something went wrong"})

# TODO: Cash
@api_view(['POST'])
def cash(request):
    try:
        cents = int(request.data['cents'])

        quarters = Cash.calculate_quarters(cents)
        cents = cents - quarters * 25

        dimes = Cash.calculate_dimes(cents)
        cents = cents - dimes * 10

        nickels = Cash.calculate_nickles(cents)
        cents = cents - nickels * 5

        pennies = Cash.calculate_pennies(cents)
        cents = cents - pennies * 1

        sum_of_coins = quarters + dimes + nickels + pennies

        return Response({"coins": sum_of_coins})

    except Exception as error:
        return Response({"message": "something went wrong", "error": str(error)})


@api_view(['POST']) 
def credit(request):
    try:
        credit_card_number = int(request.data['credit_card_number'])

        temp_card = credit_card_number

        total = 0
        last_digit = None

        while temp_card > 0:
            last_digit = temp_card % 10
            total = total + last_digit
            temp_card = temp_card // 100

        temp_card = credit_card_number // 10

        while temp_card > 0:
            last_digit = temp_card % 10
            times_two = last_digit * 2
            total = total + (times_two % 10) + (times_two // 10)
            temp_card = temp_card // 100


        length_of_card = int(Credit.get_card_length(credit_card_number))
        first_digit_of_card = int(Credit.get_first_digit_of_card(credit_card_number))
        first_two_digits = int(Credit.get_first_two_digits_of_card(credit_card_number))


        if total % 10 == 0:
            if (length_of_card == 13 or length_of_card == 16) and first_digit_of_card == 4:
                return Response({"card": "VISA"})
            elif length_of_card == 16 and (first_two_digits > 50 and first_two_digits < 56):
                return Response({"card": "MASTERCARD"})
            elif length_of_card == 15 and (first_two_digits == 34 or first_two_digits == 37):
                return Response({"card": "AMEX"})
            else:
                return Response({"card": "INVALID"})
            
        else:
            return Response({"card": "INVALID"})
    except Exception as error:
        return Response({"message": "something went wrong", "error": str(error)})