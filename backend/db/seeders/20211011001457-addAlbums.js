'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+1+Jack+Lin/DanielleDennis/DanielleDennis31.jpg",
        title: "Danielle & Dennis",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+1+Jack+Lin/JuliaFlow/JuliaFlow32.jpg",
        title: "Julia & Flow",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+1+Jack+Lin/PaulinaDaniel/PaulinaDaniel29.jpeg",
        title: "Paulina & Daniel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+2+Andre+Nguyen/20180414+LindaGeorge/LindaGeorge20.jpg",
        title: "Linda & George",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+2+Andre+Nguyen/20180721+SongMy/SongMy34.jpg",
        title: "Song & My",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+2+Andre+Nguyen/20180811+DianeJohn/DianeJohn25.jpg",
        title: "Diane & John",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+2+Andre+Nguyen/20180915+AnhParker/AnhParker26.jpg",
        title: "Anh Parker",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+3+Andre+Kim+Pham/20180922+NingNoah/NingNoah52.jpg",
        title: "Ning & Noah",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+3+Andre+Kim+Pham/20181007+ElviraRyan/ElviraRyan23.jpg",
        title: "Elvira & Ryan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+3+Andre+Kim+Pham/20181201+CatherineVan/CatherineVan28.jpg",
        title: "Catherine & Van",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+4+Lucas+Chung/20190818+CynthiaRonnie/CynthiaRonnie57.jpg",
        title: "Cythia & Ronnie",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+4+Lucas+Chung/20190831+KateGeorge/KateGeorge50.jpg",
        title: "Kate & George",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+5+Vinh+Nguyen/20191110+VanQuang/VanQuang48.jpg",
        title: "Van Quang",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+5+Vinh+Nguyen/20210822+JenBran/JenBran37.jpg",
        title: "Jen & Bran",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        coverImageUrl: "https://veilr.s3.us-west-1.amazonaws.com/userId+6+Renee+Hoang/20211001+KellyJustin/KellyJustin46.jpg",
        title: "Kelly & Justin",
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
