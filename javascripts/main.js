const civdata = {
  "leader":
  [
      { 
          "name": "Alexander",
          "civ": "Macedonian"
      },
      {   "name": "Amanitore",
          "civ": "Nubian"
      },
      {   
          "name": "Catherine de Medici ", 
          "civ":"French"
      },
      {   
          "name": "Chandragupta", 
          "civ":"Indian"
      },
      {   
          "name": "Cleopatra", 
          "civ":"Egyptian"
      },
      {   
          "name": "Cyrus", 
          "civ":"Persian"
      },
      {   
          "name": "Dido", 
          "civ":"Phoenician"
      },
      {   
          "name": "Eleanor of Aquitaine",
          "civ": "English"
      },
      {   
          "name": "Éléonore d'Aquitainee", 
          "civ": "French"
      },
      {   
          "name": "Frederick Barbarossa", 
          "civ": "German"
      },
      {   
          "name": "Gandhi", 
          "civ":"Indian"
      },
      {   
          "name": "Genghis Khan", 
          "civ":"Mongolian"
      },
      {   
          "name": "Gilgamesh", 
          "civ":"Sumerian"
      },
      {   
          "name": "Gitarja", 
          "civ":"Indonesian"
      },
      {   
          "name": "Gorgo", 
          "civ":"Greek"
      },
      {   
          "name": "Harald Hardrada", 
          "civ":"Norwegian"
      },
      {   
          "name": "Hojo Tokimun ", 
          "civ":"Japanese"
      },
      {   
          "name": "Jadwiga1", 
          "civ":"Polish"
      },
      {   
          "name": "Jayavarman VII5", 
          "civ":"Khmer"
      },
      {   
          "name": "John Curtin", 
          "civ":"Australian"
      },
      {   
          "name": "Kristina", 
          "civ":"Swedish"
      },
      {   
          "name": "Kupe", 
          "civ":"Maori"
      },
      {   
          "name": "Lautaro", 
          "civ":"Mapuche "
      },
      {   
          "name": "Mansa Musa", 
          "civ":"Malian"
      },
      {   
          "name": "Matthias Corvinus", 
          "civ":"Hungarian"
      },
      {   
          "name": "Montezuma", 
          "civ":"Aztec"
      },
      {   
          "name": "Mvemba a Nzinga", 
          "civ":"Kongolese"
      },
      {   
          "name": "Pachacuti", 
          "civ":"Incan"
      },
      {   
          "name": "Pedro II", 
          "civ":"Brazilian"
      },
      {   
          "name": "Pericles", 
          "civ":"Greek"
      },
      {   
          "name": "Peter", 
          "civ":"Russian"
      },
      {   
          "name": "Philip II", 
          "civ":"Spanish"
      },
      {   
          "name": "Poundmaker", 
          "civ":"Cree "
      },
      {   
          "name": "Qin Shi Huang", 
          "civ":"Chinese"
      },
      {   
          "name": "Robert the Bruce", 
          "civ":"Scottish"
      },
      {   
          "name": "Saladin", 
          "civ":"Arabian"
      },
      {   
          "name": "Seondeok", 
          "civ":"Korean"
      },
      {   
          "name": "Shaka", 
          "civ":"Zulu "
      },
      {   
          "name": "Suleiman", 
          "civ":"Ottoman"
      },
      {   
          "name": "Tamar", 
          "civ":"Georgian"
      },
      {   
          "name": "Teddy Roosevelt ", 
          "civ":"American"
      },
      {   
          "name": "Tomyris", 
          "civ":"Scythian"
      },
      {   
          "name": "Trajan", 
          "civ":"Roman"
      },
      {   
          "name": "Victoria", 
          "civ":"English"
      },
      {   
          "name": "Wilfrid Laurier", 
          "civ":"Canadian"
      },
      {   
          "name": "Wilhelmina", 
          "civ":"Dutch"
      }
  ],
  "map":[
      "Continents",
      "Small Continents",
      "Pangaea",
      "Fractal",
      "Islands",
      "Seven Seas",
      "Archipelago",
      "Continents & Islands",
      "Lakes"
  ],
  "size": [
      "Small",
      "Standard",
      "Large"
  ],
  "victory": [
  "Domination",
  "Science",
  "Culture",
  "Religion",
  "Diplomatic"
  ]
}

function shuffleContent(attribute){
  var str = ""
  switch(attribute){
    case "map":
      str = randomAttribute(civdata.map)
      break;
    case "leader":
      leader = randomAttribute(civdata.leader)
      console.log(leader)
      str = leader.name + " (" + leader.civ + ")"
      break;
    case "size":
      str = randomAttribute(civdata.size)
      break;
    case "victory":
      str = randomAttribute(civdata.victory)
      break;
  }
  $("p#"+attribute+"_content").text(str) 
}

function randomAttribute(a){
  val = randomInt(0,a.length-1)
  return a[val]
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
  $("#all_button").click(function(){    
    shuffleContent("map")
    shuffleContent("leader")
    shuffleContent("size")
    shuffleContent("victory")
  })
  $(".shuffle").click(function(){
    let content = $(this).attr('id').slice(0, -7)
    shuffleContent(content)
  })

  $("#all_button").click()
})
