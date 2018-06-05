var authors = [
  {name:"Arsh", sections:['Business',"Sports"]},
  {name:"RandomName", sections:["Sports"]},
  {name:"Rad", sections:["Weather","World"]},
  {name:"RRR", sections:["Sports","Movies"]}
]


var sportsAuthors = [];

for(var i = 0;i< authors.length;i++){
  if(authors[i].sections.indexOf('Sports') >= 0){
    sportsAuthors.push(authors[i].name)
  }
}

console.log(sportsAuthors)

sportsAuthors = authors.filter((author)=> author.sections.indexOf("Sports") >= 0)
                        .map((author)=> author.name)

console.log(sportsAuthors)