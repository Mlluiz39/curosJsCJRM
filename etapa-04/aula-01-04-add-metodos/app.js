let user = {
  name: 'Marcelo',
  age: 41,
  email: 'mlluiz@gmail.com',
  city: 'Rio de Janeiro',
  blogPosts: ['empadão de frango', '2 receitas de pure'],
  // aqui abaixo adicionamos o metodo de login
  login: function () {
    console.log('Usuario logado')
  },
  logout: function () {
    console.log('Usuario deslogado')
  },
  logBlogPost: function () {
    console.log(this.blogPosts)
  }
}

user.logBlogPost()
console.log(this)
