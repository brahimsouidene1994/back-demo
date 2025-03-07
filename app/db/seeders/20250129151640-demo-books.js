'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('book', [
      {
        title: 'Shadow of the Moon',
        author: 'Liam Harper',
        genre: 'Fantasy',
        cover: 'https://m.media-amazon.com/images/M/MV5BYWM3YzQ2MTEtZjA2OS00NzRkLWFmMWEtYjZjODUzN2VlNmY1XkEyXkFqcGc@._V1_.jpg',
        description: 'In a world where the moon holds ancient secrets, a young hero must uncover the truth to save their kingdom from eternal darkness.',
        price: 15.99,
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-02-05')
      },
      {
        title: 'Echoes of the Past',
        author: 'Sophia Bennett',
        genre: 'Historical Fiction',
        cover: 'https://m.media-amazon.com/images/M/MV5BODMxZTJjYzMtNzY3MC00ZWRiLWI2NDAtN2FkMTRjZGM2YTJlXkEyXkFqcGc@._V1_.jpg',
        description: 'A gripping tale of love and loss set against the backdrop of World War II, where the past refuses to stay buried.',
        price: 12.50,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-02-10')
      },
      {
        title: 'The Quantum Paradox',
        author: 'James Sinclair',
        genre: 'Science Fiction',
        cover: 'https://m.media-amazon.com/images/I/91avn4X5FBL._UF1000,1000_QL80_.jpg',
        description: 'When a scientist discovers a way to manipulate time, they must confront the consequences of altering reality itself.',
        price: 18.75,
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-18')
      },
      {
        title: 'Beneath the Surface',
        author: 'Emma Collins',
        genre: 'Mystery',
        cover: 'https://novelpro.weebly.com/uploads/2/0/6/9/2069152/published/beneath-the-surface-book-cover.jpg?1706823989',
        description: 'A small town hides dark secrets, and a journalist\'s investigation uncovers a web of lies that could cost her everything.',
        price: 14.30,
        createdAt: new Date('2024-01-28'),
        updatedAt: new Date('2024-02-14')
      },
      {
        title: 'The Art of Deception',
        author: 'Oliver Carter',
        genre: 'Thriller',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1480340162i/33142439.jpg',
        description: 'A master con artist is drawn into a dangerous game of cat and mouse with a detective who knows all their tricks.',
        price: 17.20,
        createdAt: new Date('2024-02-03'),
        updatedAt: new Date('2024-02-16')
      },
      {
        title: 'Digital Horizon',
        author: 'Noah Martinez',
        genre: 'Cyberpunk',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449686968i/27783292.jpg',
        description: 'In a dystopian future, a hacker uncovers a conspiracy that could change the fate of humanity forever.',
        price: 19.99,
        createdAt: new Date('2024-01-22'),
        updatedAt: new Date('2024-02-08')
      },
      {
        title: 'Falling for Autumn',
        author: 'Ava Richardson',
        genre: 'Romance',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664429293i/62820279.jpg',
        description: 'A heartwarming story of love and second chances, set in a picturesque small town during the fall season.',
        price: 11.99,
        createdAt: new Date('2024-02-05'),
        updatedAt: new Date('2024-02-12')
      },
      {
        title: 'Warrior\'s Path',
        author: 'Ethan Blake',
        genre: 'Action',
        cover: 'https://m.media-amazon.com/images/I/71iWXBAWKEL._AC_UF1000,1000_QL80_.jpg',
        description: 'A lone warrior embarks on a perilous journey to avenge their fallen comrades and restore honor to their name.',
        price: 16.50,
        createdAt: new Date('2024-01-18'),
        updatedAt: new Date('2024-02-06')
      },
      {
        title: 'The Hidden Truth',
        author: 'Charlotte Dawson',
        genre: 'Crime',
        cover: 'https://m.media-amazon.com/images/I/71uYLKcusUL._AC_UF1000,1000_QL80_.jpg',
        description: 'A detective races against time to solve a series of murders that lead to a shocking conspiracy within the city\'s elite.',
        price: 13.80,
        createdAt: new Date('2024-02-02'),
        updatedAt: new Date('2024-02-11')
      },
      {
        title: 'Tales from Another World',
        author: 'William Hayes',
        genre: 'Fantasy',
        cover: 'https://m.media-amazon.com/images/I/71zl2an2QwL._AC_UF1000,1000_QL80_.jpg',
        description: 'A collection of enchanting stories from a parallel universe, where magic and mythical creatures are part of everyday life.',
        price: 15.50,
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-02-09')
      },
      {
        title: 'Neon City Blues',
        author: 'Lily Morgan',
        genre: 'Cyberpunk',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551300997i/44154889.jpg',
        description: 'In a neon-lit metropolis, a private investigator must navigate a world of corporate espionage and digital warfare to uncover the truth.',
        price: 20.99,
        createdAt: new Date('2024-02-07'),
        updatedAt: new Date('2024-02-15')
      },
      {
        title: 'The Last Outlaw',
        author: 'Daniel Scott',
        genre: 'Western',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671532266l/65213508.jpg',
        description: 'A legendary outlaw faces their final showdown, as the law closes in and their past catches up with them.',
        price: 14.75,
        createdAt: new Date('2024-01-25'),
        updatedAt: new Date('2024-02-07')
      },
      {
        title: 'Mind Games',
        author: 'Amelia Cooper',
        genre: 'Psychological Thriller',
        cover: 'https://m.media-amazon.com/images/I/51L8QU8igeL._AC_UF1000,1000_QL80_.jpg',
        description: 'A psychological battle of wits between a brilliant psychiatrist and a patient with a dark, hidden agenda.',
        price: 18.30,
        createdAt: new Date('2024-01-30'),
        updatedAt: new Date('2024-02-13')
      },
      {
        title: 'The Alchemist\'s Secret',
        author: 'Benjamin Wright',
        genre: 'Fantasy',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308801743i/3084415.jpg',
        description: 'An alchemist\'s quest for immortality leads to a discovery that could change the balance of power in the world.',
        price: 16.99,
        createdAt: new Date('2024-02-04'),
        updatedAt: new Date('2024-02-17')
      },
      {
        title: 'Parallel Realities',
        author: 'Eleanor Brooks',
        genre: 'Science Fiction',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1731621431i/221527644.jpg',
        description: 'A scientist discovers a way to travel between parallel dimensions, but each world holds its own dangers and surprises.',
        price: 19.40,
        createdAt: new Date('2024-01-27'),
        updatedAt: new Date('2024-02-14')
      },
      {
        title: 'The Haunting of Blackwood Manor',
        author: 'Henry Turner',
        genre: 'Horror',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708699715i/209071439.jpg',
        description: 'A family moves into a mysterious old mansion, only to find that it is haunted by spirits with a dark and tragic past.',
        price: 13.99,
        createdAt: new Date('2024-02-06'),
        updatedAt: new Date('2024-02-18')
      },
      {
        title: 'A Chef\'s Journey',
        author: 'Isabella Reed',
        genre: 'Non-Fiction',
        cover: 'https://m.media-amazon.com/images/I/61Bqk5Kd+8L._AC_UF1000,1000_QL80_.jpg',
        description: 'The inspiring story of a chef\'s rise to fame, from humble beginnings to becoming a culinary icon.',
        price: 21.50,
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-02-08')
      },
      {
        title: 'The Silent Witness',
        author: 'Jacob Evans',
        genre: 'Legal Thriller',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692729728i/32905498.jpg',
        description: 'A high-stakes courtroom drama where the key witness holds the power to determine the outcome of a landmark case.',
        price: 17.80,
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-10')
      },
      {
        title: 'Uncharted Waters',
        author: 'Natalie Fox',
        genre: 'Adventure',
        cover: 'https://m.media-amazon.com/images/I/91LqZ2sZMCL._UF1000,1000_QL80_.jpg',
        description: 'An explorer sets sail on a daring voyage to discover uncharted lands, facing danger and mystery at every turn.',
        price: 15.25,
        createdAt: new Date('2024-01-29'),
        updatedAt: new Date('2024-02-16')
      },
      {
        title: 'The Architect\'s Dream',
        author: 'Zachary King',
        genre: 'Drama',
        cover: 'https://m.media-amazon.com/images/I/51rAoWz1yuL._AC_UF1000,1000_QL80_.jpg',
        description: 'A visionary architect\'s dream to build the perfect city becomes a journey of self-discovery and sacrifice.',
        price: 12.99,
        createdAt: new Date('2024-01-31'),
        updatedAt: new Date('2024-02-12')
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book', null, {});
  }
};