f = open('example.df')
program = f.read()

accumulator = 0

for i in program:
  if i == "i":
    accumulator += 1
  elif i == "d":
    accumulator -= 1
  elif i == "s":
    accumulator = accumulator ** 2
  elif i == "p":
    print(accumulator)

  if accumulator == 256 or accumulator == -1:
    accumulator = 0
