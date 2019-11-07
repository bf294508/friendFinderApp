// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Multiple dummy friends makes it easier to test!
// ===============================================================================

var userData = [
    {
      "name": "Pikachu",
      "photo": "https://drive.google.com/open?id=1gQi2ie3jCGfBjJyvdhVE0aGS3la6LZOw",
      "scores":[
          5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
      ]
    },
    {
      "name": "charmander",
      "photo": "https://drive.google.com/open?id=1gQi2ie3jCGfBjJyvdhVE0aGS3la6LZOw",
      "scores":[
          3,
          2,
          2,
          4,
          1,
          1,
          5,
          1,
          3,
          1
      ]
    },
    
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userData;