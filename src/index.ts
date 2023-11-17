function Greet(): void {
  console.log('Hello World everyone')
  console.log('hi')
}

const favoriteFruits: string[] = ['apple', 'strawberry', 'orange']

function AddFruit(fruit: string): void {
  favoriteFruits.push(fruit)
}

Greet()

AddFruit(favoriteFruits[2])
