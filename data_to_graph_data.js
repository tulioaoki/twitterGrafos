/*
* GRAPH FORMAT
* {
  "nodes": [
    {
      "id": "n0",
      "label": "A node",
      "x": 0,
      "y": 0,
      "size": 3
    },
    {
      "id": "n1",
      "label": "Another node",
      "x": 3,
      "y": 1,
      "size": 2
    },
    {
      "id": "n2",
      "label": "And a last one",
      "x": 1,
      "y": 3,
      "size": 1
    }
  ],
  "edges": [
    {
      "id": "e0",
      "source": "n0",
      "target": "n1"
    },
    {
      "id": "e1",
      "source": "n1",
      "target": "n2"
    },
    {
      "id": "e2",
      "source": "n2",
      "target": "n0"
    }
  ]
}

*
*
* */
var ed_count = -1;
var graphs_object = {"nodes":[],"edges":[]};
let my_data = require('./twitter_data');
let id = '';
let novo_id = '';
let valor_x = 0;
let valor_y = 0;
let aux_x, aux_y;
let valores_existentes = [];
let x = []
let y = []
let aux2;
function get_random_numbers(){
    aux_x = Math.random()*100000;
    aux_y = Math.random()*100000;
    while(x.includes(aux_x)){
        aux_x = Math.random()*100000;
    }
    while(y.includes(aux_y)){
        aux_y = Math.random()*100000;
    }
    console.log(aux_x,aux_y)
    x.push(aux_x);
    y.push(aux_y);
    return{aux_x, aux_y}
}

function get_new_edge_id(){
    ed_count++;
    return `e${ed_count}`
}
for(let x in my_data){
    if(valores_existentes.includes(x) === false){
        valores_existentes.push(x)
        aux2 = get_random_numbers()
        valor_x = aux2.aux_x
        valor_y = aux2.aux_y
        graphs_object["nodes"].push({
            "id": x,
            "label": x,
            "x": valor_x,
            "y": valor_y,
            "size": 3
        })
        aux2 = get_random_numbers()
        valor_x = aux2.aux_x
        valor_y = aux2.aux_y
        for(let y in my_data[x].followers){
            if(valores_existentes.includes(my_data[x].followers[y]) === false){
                valores_existentes.push(my_data[x].followers[y])
                graphs_object["nodes"].push({
                    "id": my_data[x].followers[y],
                    "label": my_data[x].followers[y],
                    "x": valor_x,
                    "y": valor_y,
                    "size": 3
                })
                aux2 = get_random_numbers()
                valor_x = aux2.aux_x
                valor_y = aux2.aux_y
                novo_id = get_new_edge_id()
                graphs_object["edges"].push({
                    "id": novo_id,
                    "source": x,
                    "target": my_data[x].followers[y],
                })
            }
        }
    }


}

let fs = require("fs");
let data = JSON.stringify(graphs_object);

fs.writeFile("graph_data.txt", data, (err) => { //writes data in graph format (for sigma.js)
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});
//for(let user in Object.keys(my_data)){
//    graphs_object["nodes"].append(user)
//}