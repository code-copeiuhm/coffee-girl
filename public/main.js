
let machines = [
    {
        Machine: {
            physical_location :"Entre",
            beans : [
                {
                    roast : {
                        Dark : 95
                    },
                    roast_date : "2023-03-25",
                    source : "Vodskov"
                }
            ]
        },

        Coffees: [Coffee = { name: "Black Coffee", water_ratio: 15, milk_ratio: null, milk_type: null },
            Coffee = { name: "Cafe Latte", water_ratio: 2, milk_ratio: 5, milk_type: "Skim"},
            Coffee = { name: "Espresso", water_ratio: 2, milk_ratio: null, milk_type: null }]
    },
    {
        Machine: {
            physical_location :"bathroom",
            beans : [
                {
                    roast : {
                        Dark : 95
                    },
                    roast_date : "2023-03-25",
                    source : "Vodskov"
                }
            ]
        },

        Coffees: [Coffee = { name: "Tea", water_ratio: 15, milk_ratio: null, milk_type: null },
            Coffee = { name: "Cafe Latte", water_ratio: 2, milk_ratio: 5, milk_type: "Skim"},
            Coffee = { name: "Espresso", water_ratio: 2, milk_ratio: null, milk_type: null }]
    }
]

document.getElementById("coffee-machines").onchange = makeList;

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


function showCoffeeMachines(){
    let select_element = document.getElementById("coffee-machines");
    create_option("None", "none", select_element);
    for (i = 0; i < machines.length; i++){
        create_option(`Kaffemaskine ${i} : ${machines[i].Machine.physical_location}`,
                    `Kaffemaskine ${i} : ${machines[i].Machine.physical_location}`,
                        select_element);
    }
}

function makeList(){
    let chosen_coffee_machine = document.getElementById("coffee-machines").value;
    let select_element = document.getElementById("coffee-machines");
    let coffees_element = document.getElementById("coffees");
    removeChilds(coffees_element);

    let index = get_index(select_element, chosen_coffee_machine);

    if (!(index+1)) return

    let coffees = machines[index].Coffees;

    for (i = 0; i < coffees.length; i++){
        option = document.createElement("option");
        create_option(coffees[i].name, coffees[i].name, coffees_element);

        coffees[i].name
    }
}

function create_option(text, id, element){
    option = document.createElement("option");
    option.text = text;
    option.id = id;
    element.add(option);
}

function get_index(element, text){
    for (i = 0; i< element.children.length; i++) {
        if (element.children[i].id === text){
            return i-1;
        }
    }
    return undefined;
}

