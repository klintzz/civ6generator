$(document).ready(function(){
  $("#main-shuffle").click(function(){
    var civ = [
      "Alexander (Civ6) Alexander3 	Macedonian (Civ6)",
"Amanitore (Civ6) Amanitore4 	Nubian (Civ6)",
"Catherine de Medici (Civ6) Catherine de Medici 	French (Civ6)",
"Chandragupta	Indian (Civ6)",
"Cleopatra (Civ6) Cleopatra 	Egyptian (Civ6)",
"Cyrus (Civ6) Cyrus3 	Persian (Civ6)",
"Frederick Barbarossa (Civ6) Frederick Barbarossa 	German (Civ6)",
"Gandhi (Civ6) Gandhi 	Indian (Civ6)",
"Genghis Khan	Mongolian ",
"Gilgamesh (Civ6) Gilgamesh 	Sumerian (Civ6)",
"Gitarja (Civ6) Gitarja5 	Indonesian (Civ6)",
"Gorgo (Civ6) Gorgo 	Greek (Civ6)",
"Harald Hardrada (Civ6) Harald Hardrada 	Norwegian (Civ6)",
"Hojo Tokimune (Civ6) Hojo Tokimune 	Japanese (Civ6)",
"Jadwiga (Civ6) Jadwiga1 	Polish (Civ6)",
"Jayavarman VII (Civ6) Jayavarman VII5 	Khmer (Civ6)",
"John Curtin (Civ6) John Curtin2 	Australian (Civ6)",
"Lautaro	Mapuche ",
"Montezuma (Civ6) Montezuma 	Aztec (Civ6)",
"Mvemba a Nzinga (Civ6) Mvemba a Nzinga 	Kongolese (Civ6)",
"Pedro II (Civ6) Pedro II 	Brazilian (Civ6)",
"Pericles (Civ6) Pericles 	Greek (Civ6)",
"Peter (Civ6) Peter 	Russian (Civ6)",
"Philip II (Civ6) Philip II 	Spanish (Civ6)",
"Poundmaker	Cree ",
"Qin Shi Huang (Civ6) Qin Shi Huang 	Chinese (Civ6)",
"Robert the Bruce	Scottish ",
"Saladin (Civ6) Saladin 	Arabian (Civ6)",
"Seondeok	Korean",
"Shaka	Zulu ",
"Tamar	Georgian ",
"Teddy Roosevelt (Civ6) Teddy Roosevelt 	American (Civ6)",
"Tomyris (Civ6) Tomyris 	Scythian (Civ6)",
"Trajan (Civ6) Trajan 	Roman (Civ6)",
"Victoria (Civ6) Victoria 	English (Civ6)",
"Wilhelmina	Dutch  ",
    ]
    var map = [
      "Continents",
      "Pangaea",
      "Fractal",
      "Islands",
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
