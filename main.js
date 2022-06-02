var novoPost = {
    foto: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
    titulo: 'Gato',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, accusamus?'
}
var containerElemento = document.querySelector('.container')
var addNewPost = document.querySelector('#newPost')


var posts = [
    {
        foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
        titulo: 'O tigre',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
        titulo: 'O tigre versão Shine',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },
    {
        foto: 'https://img.r7.com/images/leao-branco-juba-moya-19012022005116744',
        titulo: 'O leão',
        texto: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
    },
    {
        foto: 'https://folhago.com.br/blogs/my-pet/wp-content/uploads/2021/12/Pantera-e-animal-perigoso.jpg',
        titulo: 'Pantera Negra',
        texto: 'Primeiro as coisas mais importantes: uma “pantera negra” não é o nome da espécie. É um termo abrangente que se refere a qualquer grande felino com pelo preto. A condição é causada pelo gene agouti, que regula a distribuição do pigmento preto dentro da haste do pelo, de acordo com a Universidade da Califórnia em Davis. É mais conhecido nos leopardos, que vivem na Ásia e na África, e nas onças-pintadas, habitantes da América do Sul.'

    }
]

for(let post of posts) {

    containerElemento.innerHTML += `
        <div class="item">
            <img src="${post.foto}">
            <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
        </div>
    `

}


addNewPost.addEventListener('click', (evento) => {

     let newpost = {
         foto: prompt('cadastre link da nova foto..!'),
         titulo: prompt('Titulo:'),
         texto: prompt('Descrição:')
     }
    
     addNewPost.innerHTML += `
     <div class="item">
         <img src=${newpost.foto}>
         <h2>${newpost.titulo}</h2>
         <p>${newpost.texto}</p>
     </div>
     ` 
 })


// Membros GRUPO
// Ricardo de Freitas 
// Daniele Mendes
// Josemar Silva Nascimento
// Luiz Vagner da Silva
// Natali de Souza
