import re
import string

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


class Caesar:
    @staticmethod
    def only_digits(s):
        return s.isdigit()
    


class Substitution:
    @staticmethod
    def has_duplicates(s):
        char_set = set()
        for char in s:
            if char in char_set:
                return True
            char_set.add(char)
        return False