const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      src: 'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg'
      // source allociné
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      src: 'https://kbimages1-a.akamaihd.net/65593244-ae98-47b1-8bc0-f0bd0c4815ab/353/569/90/False/midnight-sun-36.jpg'
      // source: rakuten
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      src: 'https://jcsatanas.fr/wp-content/uploads/2018/11/les-indestructibles-2.jpg'
      //source jcsatanas.fr
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      src: 'https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg',
      // source: allocine
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      src: 'https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg'
      // source allociné
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      src: 'https://www.ecranlarge.com/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg'
      // source: ecranLarge
    }, {
      id: '7',
      title: 'Intouchables',
      category: 'Drame',
      likes: 14,
      dislikes: 32,
      src: 'https://fr.web.img6.acsta.net/medias/nmedia/18/82/69/17/19806656.jpg'
      // source: allocine
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      src: 'https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg',
      // source: allocine
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      src: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
      // source: allociné
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      src: 'https://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg'
      // source: allocine
    },
    {
      id: '11',
      title: 'Uncharted',
      category: 'Action',
      likes: 18,
      dislikes: 12,
      src: 'https://fr.web.img6.acsta.net/pictures/22/01/18/10/13/5983633.jpg'
      // source: allocine
    },
    {
      id: '12',
      title: 'Avatar',
      category: 'Science-fiction',
      likes: 123,
      dislikes: 27,
      src: 'https://fr.web.img4.acsta.net/pictures/22/08/25/09/04/2146702.jpg'
      // source: betanews
    },
    {
      id: '13',
      title: 'spider-man no way home',
      category: 'Super-héros',
      likes: 250,
      dislikes: 18,
      src: 'https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg'
      // source: allocine
    },{
      id: '14',
      title: 'Prey',
      category: 'Science-fiction',
      likes: 21,
      dislikes: 15,
      src: 'https://fr.web.img2.acsta.net/pictures/22/07/29/09/44/2282623.jpg'
      // source: allocine
    },{
      id: '15',
      title: 'Logan',
      category: 'Super-héros',
      likes: 106,
      dislikes: 12,
      src: 'https://fr.web.img4.acsta.net/pictures/17/01/19/16/02/513278.jpg'
      // source: allocine
    },{
      id: '16',
      title: 'Thor: Love and Thunder',
      category: 'Super-héros',
      likes: 10,
      dislikes: 4,
      src: 'https://fr.web.img6.acsta.net/pictures/22/05/24/11/16/2411535.jpg'
      // source: allocine
    },{
      id: '17',
      title: 'fast and furious 9',
      category: 'Action',
      likes: 40,
      dislikes: 37,
      src: 'https://fr.web.img5.acsta.net/pictures/21/05/18/10/40/2487837.jpg'
      // source: allocine
    },{
      id: '18',
      title: 'On arrive quand ?',
      category: 'Comedy',
      likes: 220,
      dislikes: 20,
      src: 'https://fr.web.img4.acsta.net/medias/nmedia/18/35/47/18/18400486.jpg'
      // source: allocine
    },{
      id: '19',
      title: 'Un prince à New York',
      category: 'Comedy',
      likes: 123,
      dislikes: 12,
      src: 'https://m.media-amazon.com/images/I/510DERZMCSL._AC_SY445_.jpg'
      // source: amazon.fr
    },{
      id: '20',
      title: 'Barbershop 3',
      category: 'Comedy',
      likes: 22,
      dislikes: 4,
      src: 'https://fr.web.img4.acsta.net/pictures/15/11/24/12/33/022672.jpg'
      // source: allocine
    },{
      id: '21',
      title: 'the kingsman',
      category: 'Action',
      likes: 16,
      dislikes: 5,
      src: 'https://m.media-amazon.com/images/I/81Mi4-Qt4wL._AC_SL1500_.jpg'
      // source: amazon
    },{
      id: '22',
      title: 'Glass',
      category: 'Thriller',
      likes: 4,
      dislikes: 6,
      src: 'https://www.avoir-alire.com/IMG/arton39633.jpg'
      // source: avoir-alire.com
    },{
      id: '23',
      title: 'Dragond',
      category: 'Animation',
      likes: 4,
      dislikes: 10,
      src: 'https://fr.web.img4.acsta.net/medias/nmedia/18/73/01/74/19343191.jpg'
      // source: allocine
    },{
      id: '24',
      title: 'Madagascar',
      category: 'Animation',
      likes: 9,
      dislikes: 4,
      src: 'https://www.ecranlarge.com/uploads/image/001/121/aa1eztisz2rquk2qiugu1pxchrm-096.jpg'
      // source: ecranlarge.com
    },
    
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))