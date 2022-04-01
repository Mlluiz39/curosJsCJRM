// a palavra-chave this
let user = {
  name: 'Marcelo',
  age: 41,
  email: 'mlluiz@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de pure com batata'],
  //aqui abaixo adicionamos o metodo de login
  login () {
    console.log('Usuario logado')
  },
  logout () {
    console.log('Usuario deslogado')
  },
  logBlogPost () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logBlogPost()

/* console.log(this) aqui ele referencia o objeto global */


