angular.module('starter.services', [])

.factory('Chickens', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chickens = [{
    id: 0,
   type: 'Hybrid',
    name: 'Heddy',
    description: 'I am a hybrid chicken. I am a golden-brown color and I lay almost 300 eggs a year, my eggs medium sized and brown in color.',
    face: 'img/chick00.png'
  }, {
    id: 1,
   type: 'Rhode Island Red',
    name: 'Roxanne',
    description: 'I am a popular type of backyard chicken. My ancestors originated in North America and I am a tough bird. I lay about 250 eggs a year, my eggs are medium sized and brown in color. Unfortunately, my meat is good to the human taste buds too.',
    face: 'img/chick01.png'
  }, {
    id: 2,
  type: 'Leghorn',
    name: 'Loretta',
    description: 'A famous cartoon character is named after my type – Foghorn Leghorn. But us chickens know how to pronounce my type as leggern. (Exaggerate the g and do not pronounce the h). I originated in Tuscany, Italy and I lay white eggs – lots of them. I can be shy and hard to tame. So, do not pick me if you want a pet.',
    face: 'img/chick02.png'
  }, {
    id: 3,
  type: 'Sussex',
    name: 'Samantha',
    description: 'I am a friendly and tame breed of chicken and come in a variety of colors. My most common is white with a gray ring around my neck. I will eat from your hand and you can let me roam around your yard. I will produce eggs of brown to creamy white in color. Unfortunately, people like my meat too. Please don’t kill me, I’ll produce lots of eggs for you.',
    face: 'img/chick03.png'
  }, {
    id: 4,
  type: 'Plymouth Rock',
    name: 'Pauleen',
    description: 'I produce small, light brown eggs, about once every two days. So, I am a good choice for you first time backyard chicken keepers. I’m tame and beautiful! Don’t you love my stripes?',
    face: 'img/chick04.png'
  }, {
    id: 5,
  type: 'Ancona',
    name: 'Annie',
    description: 'I am a small chickie and I produce small white eggs. I originated in Italy. I am not a good backyard breed for beginners because I can be skittish, and I have been known to fly! (so you will have to keep my feathers clipped or you will be looking for me all over the neighborhood.',
    face: 'img/chick05.png'
  }, {
    id: 6,
  type: 'Barnevelder',
    name: 'Beverley',
    description: 'I am a great garden bird. I cannot fly out of a pen so you will not have to worry about clipping my feathers. I produce about 200 eggs per year and my eggs are small to medium size with a light speckled brown color.',
    face: 'img/chick06.png'
  }, {
    id: 7,
  type: 'Hamburg',
    name: 'Helen',
    description: 'I am a native of Germany. My eggs have a beautiful white glossy shell. I sort of look like a Dalmatian dog, but some of my breed may have black feathers with gold tips. I like to roam so you better have a lot of space for me or I will get aggressive. If you are looking for a free-range chicken, them I am your pal.',
    face: 'img/chick07.png'
  },
{
    id: 8,
  type: 'Maran',
    name: 'Melinda',
    description:'I sometimes look like the Plymouth Rock chicken, but I’m very different. I am smaller and can live in a small space. I can live in a little city yard. However, I am difficult to tame, so I do not make a good pet. I produce around 200 eggs per year and my eggs are medium in size with a beautiful brown color.',
    face: 'img/chick08.png'
  },
{
    id: 9,
  type: 'Buff Orpington',
    name: 'Aunt Bea',
    description:'I will give you a little under 200 eggs per year but you will love to have me as a pet. I get broody in the summer, so I will produce fewer eggs then. I have a beautiful coat of feathers though and I am very tame. I will follow you around the garden, eat from your hand and try to socialize with you! ',
    face: 'img/chick09.png'
  
  }];

  return {
    all: function() {
      return chickens;
    },
    remove: function(chat) {
      chickens.splice(chickens.indexOf(chicken), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chickens.length; i++) {
        if (chickens[i].id === parseInt(chickenId)) {
          return chickens[i];
        }
      }
      return null;
    }
  };
});
