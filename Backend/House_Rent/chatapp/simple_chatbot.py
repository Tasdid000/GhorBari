import re
import random
import json

class SimpleChatbot:
    def __init__(self, dataset_path='I:/House rent/Backend/House_Rent/chatapp/dataset.json'):
        self.patterns = []
        self.load_dataset(dataset_path)

    def load_dataset(self, dataset_path: str):
        with open(dataset_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            for entry in data:
                user_pattern = entry['user']
                bot_responses = entry['bot']
                self.patterns.append((user_pattern, bot_responses))

    def preprocess_input(self, user_input: str) -> str:
        # Add any preprocessing steps if needed
        return user_input.lower()

    def match_pattern(self, user_input: str, user_pattern) -> bool:
        if isinstance(user_pattern, list):
            # If user pattern is a list, check if any pattern matches
            return any(re.search(re.compile(pattern, re.IGNORECASE), user_input) for pattern in user_pattern)
        elif isinstance(user_pattern, str):
            # If user pattern is a string, check for a single match
            return bool(re.search(re.compile(user_pattern, re.IGNORECASE), user_input))
        else:
            return False  # Handle other cases as needed

    def respond(self, user_input: str) -> str:
        user_input = self.preprocess_input(user_input)

        for user_pattern, bot_responses in self.patterns:
            if self.match_pattern(user_input, user_pattern):
                return random.choice(bot_responses)

        return "I'm sorry, I didn't understand that."

# Example usage:
if __name__ == "__main__":
    chatbot = SimpleChatbot(dataset_path='I:/House rent/Backend/House_Rent/chatapp/dataset.json')
    user_input = input("You: ")
    response = chatbot.respond(user_input)
    print("ChatBot:", response)
