class Cash:
    def calculate_quarters(self, cents):
        try:
            number_of_quarters = cents // 25
            return number_of_quarters
        except Exception as error:
            return f"something went wrong: {error}"
        

    def calculate_dimes(self, cents):
        try:
            number_of_dimes = cents // 10
            return number_of_dimes
        except Exception as error:
            return f"something went wrong: {error}"
        

    def calculate_nickles(self, cents):
        try:
            number_of_nickles = cents // 5
            return number_of_nickles
        except Exception as error:
            return f"something went wrong: {error}"
        

    def calculate_pennies(self, cents):
        try:
            number_of_pennies = cents // 1
            return number_of_pennies
        except Exception as error:
            return f"something went wrong: {error}"
        
class Credit:
    @classmethod
    def get_card_length(cls, n):
        try:
            return len(str(n))
        except Exception as error:
            return f"something went wrong: {error}"

    @classmethod
    def get_first_digit_of_card(cls, n):
        try:
            return str(n)[0]
        except Exception as error:
            return f"something went wrong: {error}"

    @classmethod
    def get_last_digit_of_card(cls, n):
        try:
            return str(n)[-1]
        except Exception as error:
            return f"something went wrong: {error}"

    @classmethod
    def get_first_two_digits_of_card(cls, n):
        try:
            return str(n)[:2]
        except Exception as error:
            return f"something went wrong: {error}"
        

