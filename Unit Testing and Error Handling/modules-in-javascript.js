// модулите в JS са отделни файлове които ние можем да зареждаме!!!
// заежда се код от вънщни файлове;
// файла е модул !!!
// от един модул можем да заредин друг модул!!!
// от един файл можем да заредим друг файл.

// Използваме функцията require() за да зареждаме модули.
const http = require('http') // => така зареждаме модула http, което ни позволява да създадем сървър в Node.js и даотговаряме на зачвката.

// ако искаме да заредим файл който ние сме направилви трябва да казжем пътия към файла
const myModule = require('./myModule.js') // => това е пътия към файла и заоичва с точка и наклонена черта.
// наклонена черта означава търси го в текущата папака.