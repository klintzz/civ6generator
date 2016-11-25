$(document).ready(function(){
  $("#main-shuffle").click(function(){
    var civ = [
      "America",
      "Arabia",
      "Aztec",
      "Brazil",
      "China",
      "Egypt",
      "England",
      "France",
      "Germany",
      "Greece",
      "India",
      "Japan",
      "Kongo",
      "Norway",
      "Rome",
      "Russia",
      "Scythia",
      "Spain",
      "Sumeria",
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
})