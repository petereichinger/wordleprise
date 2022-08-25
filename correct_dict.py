file = open('words_alpha.txt', 'r')

for line in file.readlines():
    if len(line.strip()) == 5:
        print(line.strip())

file.close()