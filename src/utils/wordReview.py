import random, json

words_to_add = []
word = {}

with open('../words.json', 'r') as file:
    base_json = json.load(file)
    max_words = len(base_json.keys())
    for i in range(10):
        current_word = random.randint(0, max_words)
        keys = list(base_json)
        word[current_word] = keys[current_word]
        
print(word)

with open('./vettedWords.json', 'r+') as vettedFile:
    base_json = json.load(vettedFile)
    current_vetted = base_json["vettedWords"]
    vettedFile.seek(0)
    vettedFile.truncate()
    for candidate in word:
        if candidate in current_vetted:
            print("word in list already")
            continue
        else:
            x = input(f"Add this word: {word[candidate]}? ")
            if x.lower() == "y":
                current_vetted.append(word[candidate])
    json.dump({"vettedWords" : current_vetted}, vettedFile)