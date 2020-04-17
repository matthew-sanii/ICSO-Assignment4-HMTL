"""
Your module description
"""
PI = (3.14)
while True:
  diameter = input('Enter the diameter of the circle :')
  try:
    dia = float(diameter)
  except ValueError:
    print("Oops!  That was no valid number. Try again...")
    break
  if dia <= 0:
    print("value must be bigger than 0, please try again")
  else:
    r = dia / 2
    area = PI * r * r
    circumference = PI * r * 2
    print("Area of the circle is : %.2f" %area)
    print("Circumference of the circle is : %.2f" %circumference)