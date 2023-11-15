const houses = [
    {
        code: "ST",
        name: "Stark"
    },

    {
        code: "LA",
        name: "Lannister"
    },

    {
        code: "BA",
        name: "Baratheon"
    },

    {
        code: "TA",
        name: "Targaryen"
    }
];


const getCharacters = houseCode => {
switch (houseCode) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];

    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];

    case "BA":
        return ["Robert", "Stannis", "Renly"];

    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];

    default:
        return ["No House Selected"]; 
}
};


document.addEventListener('DOMContentLoaded', init);

function init() {
    let house = document.getElementById('house');


    houses.forEach( (item)=> {
        const option = document.createElement('OPTION');
        option.value = item.code;
        option.innerText = item.name;
        house.appendChild(option);
    });

    house.addEventListener('change', (e) => {
        const code = e.target.value;
        let members = getCharacters(code);
        const container = document.getElementById('characters');
        container.innerHTML = '';

        members.forEach((person)=> {
            let item = document.createElement('LI');
            item.innerText = person;
            container.appendChild(item);
        });

    });

}

//BG Color Swap
async function bg_color_request() {
    const response = await fetch("https://x-colors.yurace.pro/api/random");
    const response_json = await response.json();
    return response_json.hex;
}
  
async function bg_change() {
    let bg = document.getElementById('bg');
    const random_color = await bg_color_request();
    bg.style.backgroundColor= random_color;
    console.log(`BG color successfully changed to: ${random_color}`)
}