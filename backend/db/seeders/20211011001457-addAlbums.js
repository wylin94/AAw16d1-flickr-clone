'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-W%26T-WeddingHighlights-1.jpeg",
        title: "Jack Album 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-V%26J-WeddingHighlights-33.jpeg",
        title: "Jack Album 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-TA%26D-WeddingHighlights-22.jpeg",
        title: "Jack Album 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-TA%26D-WeddingHighlights-2.jpeg",
        title: "User 2 Album 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-TA%26D-WeddingHighlights-11.jpeg",
        title: "User 2 Album 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-SM%26B-WeddingHighlights-34.jpg",
        title: "User 2 Album 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-S%26S-WeddingHighlights-5.jpeg",
        title: "User 3 Album 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-S%26S-WeddingHighlights-47.jpeg",
        title: "User 3 Album 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        coverImageUrl: "https://remember-flickr-clone.s3.us-west-1.amazonaws.com/Landing+Page/Resized-S%26R-WeddingHighlight-1.jpeg",
        title: "User 3 Album 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  }
};
