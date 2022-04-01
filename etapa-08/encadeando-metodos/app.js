const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

// const filteredBooks = books.filter(book => book.price > 20)
// const booksOnSale = filteredBooks.map(book => ` O preço do livro "${book.name}" caiu para ${book.price} reais`)
// debugger

const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(({ name, price }) => 
    `O preço do livro "${name}" caiu para ${price} reais`)
debugger
