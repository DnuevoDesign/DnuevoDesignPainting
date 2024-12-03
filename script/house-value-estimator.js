let number_of_rooms = null;
let avg_room_size = null;
let home_size = null;
let current_house_value = null;

let option_buttons = document.getElementById('option-buttons');
option_buttons = option_buttons.querySelectorAll('button');

for (let i = 0; i < option_buttons.length; i++) {
    option_buttons[i].addEventListener('click', () => {
        const button = i;

        switch (button) {
            case 0: {
                home_size = null;
                document.getElementById('interior-container').style.display = 'block';
                document.getElementById('exterior-container').style.display = 'none';
            }
            break;
            case 1: {
                document.getElementById('interior-container').style.display = 'block';
                document.getElementById('exterior-container').style.display = 'block';
            }
            break;
            case 2: {
                number_of_rooms = null;
                avg_room_size = null;
                document.getElementById('interior-container').style.display = 'none';
                document.getElementById('exterior-container').style.display = 'block';
            }
            break;
            default: console.log("Error: Option-Button");
        }
        document.getElementById('home_value_container').style.display = 'block';
    });
}

let submit = document.getElementById('estimator_submit').addEventListener('click', () => {
    const paint_cost = 3;

    // Get selected values
    number_of_rooms = document.getElementById('room-number').value;
    avg_room_size = document.getElementById('room-size').value;
    home_size = document.getElementById('home_size').value;
    current_house_value = document.getElementById('home_value').value;

    // Calculate cost for interior
    let interior_cost = 0;
    if (number_of_rooms && avg_room_size) {
        interior_cost = (number_of_rooms * avg_room_size) * paint_cost;
    }

    // Calculate cost for exterior
    let exterior_cost = 0;
    if (home_size) {
        exterior_cost = home_size * paint_cost;
    }

    // Calculate total cost (interior + exterior)
    let total_cost = interior_cost + exterior_cost;

    // Calculate the house's new value (assuming ROI is an increase in value)
    let increase_in_value = total_cost * 0.2;  // Example: ROI of 20%
    let estimated_value = parseInt(current_house_value) + increase_in_value;

    // Calculate ROI percentage
    let roi = (increase_in_value / total_cost) * 100;

    // Update the UI with calculated values
    document.getElementById('cost-value').textContent = total_cost.toFixed(2);
    document.getElementById('increase-value').textContent = increase_in_value.toFixed(2);
    document.getElementById('roi-value').textContent = roi.toFixed(2) + '%';
});