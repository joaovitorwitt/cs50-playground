import re

class Readability:
    def count_letters(string):
        number_of_letters = 0

        for letter in string:
            if letter.isalpha():
                number_of_letters += 1
        return number_of_letters
    
    def count_words(string):
        number_of_words = 1

        for word in string:
            if word == " ":
                number_of_words += 1
        return number_of_words

    def count_sentences(string):
        number_of_sentences = 0

        for char in string:
            if re.search(r"[.?!]", char):
                number_of_sentences += 1
        return number_of_sentences


class Bulbs:
    pass