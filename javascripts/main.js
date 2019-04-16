$(document).ready(function(){
  $("#main-shuffle").click(function(){
    var civ = [
      "Alexander 	Macedonian",
"Amanitore 	Nubian",
"Catherine de Medici 	French",
"Chandragupta	Indian",
"Cleopatra 	Egyptian",
"Cyrus	Persian",
"Dido Phoenician",
"Eleanor of Aquitaine English",
"Eleanor of Aquitaine Frensh",
"Frederick Barbarossa 	German",
"Gandhi 	Indian",
"Genghis Khan	Mongolian ",
"Gilgamesh 	Sumerian",
"Gitarja 	Indonesian",
"Gorgo 	Greek",
"Harald Hardrada 	Norwegian",
"Hojo Tokimune 	Japanese",
"Jadwiga1 	Polish",
"Jayavarman VII5 	Khmer",
"John Curtin 	Australian",
"Kristina Swedish",
"Kupe Maori",
"Lautaro	Mapuche ",
"Mansa Musa Malian",
"Matthias Corvinus Hungarian",
"Montezuma 	Aztec",
"Mvemba a Nzinga 	Kongolese",
"Pachacuti Incan",
"Pedro II 	Brazilian",
"Pericles 	Greek",
"Peter 	Russian",
"Philip II 	Spanish",
"Poundmaker	Cree ",
"Qin Shi Huang 	Chinese",
"Robert the Bruce	Scottish ",
"Saladin 	Arabian",
"Seondeok	Korean",
"Shaka	Zulu ",
"Suleiman Ottoman",
"Tamar	Georgian ",
"Teddy Roosevelt 	American",
"Tomyris 	Scythian",
"Trajan 	Roman",
"Victoria 	English",
"Wilfrid Laurier Canadian",
"Wilhelmina	Dutch  ",
    ]
    var map = [
      "Continents",
      "Pangaea",
      "Fractal",
      "Islands",
      "Earth",
    ]
    var size = [
      "Small",
      "Standard",
      "Large",
    ]
    var victory = [
      "Domination",
      "Science",
      "Culture",
      "Religion",
      "Diplomatic"
    ]

    modifyContent("map")
    modifyContent("civ")
    modifyContent("size")
    modifyContent("victory")

    function modifyContent(attribute){
      var str = ""
      switch(attribute){
        case "map":
          str = randomAttribute(map)
          break;
        case "civ":
          str = randomAttribute(civ)
          break;
        case "size":
          str = randomAttribute(size)
          break;
        case "victory":
          str = randomAttribute(victory)
          break;
      }
      console.log(str)
      console.log("p#"+attribute+"_content")
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
  })
  $("#main-shuffle").click()
})
