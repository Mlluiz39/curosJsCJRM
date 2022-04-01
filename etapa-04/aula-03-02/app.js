// objetos em array
let user = {
  name: 'Marcelo',
  age: 41,
  email: 'mlluiz@gmail.com',
  city: 'Rio de Janeiro',
  blogPosts: [
    {title: 'Empadão de frango', likes: 30},
    {title: '4 receita de pure de batata', likes: 50}
  ],
  logBlogPost: function () {
    console.log(`${this.name} escreveu os seguintes posts:`)
    
    this.blogPosts.forEach(post => {
      console.log(`${post.title}, e teve ${post.likes} Likes`)
    }) 
  }
}

user.logBlogPost()

