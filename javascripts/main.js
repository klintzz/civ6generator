$(document).ready(function(){
  $("#main_shuffle").click(function(){
    var values = JSON.parse({ "civ" : [
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
                    ],
                    "map" : [
                      "Continents",
                      "Pangaea",
                      "Fractal",
                      "Islands",
                    ],
                    "size" : [
                      "Small",
                      "Standard",
                      "Large",
                    ],
                    "victory" : [
                      "Domination",
                      "Science",
                      "Culture",
                      "Religion",
                    ]
                })
    
    modifyContent("map")
    modifyContent("size")
    modifyContent("civ")
    modifyContent("victory")

    function modifyContent(attribute){
      $(attribute+"_content").text = randomAttribute(attribute)      
    }

    function randomAttribute(a){
      attribute = values[a]
      val = randomInt(aattribute.length)
      return attribute[val-1]
    }

    function randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }



  })
})