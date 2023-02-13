function change_quantity(name, increment) {
    let quantity = document.getElementById(`${name}-quantity`);
    if (quantity > 0) {
        quantity.value += increment;
    }
}

function order() {
    alert(`Hello World`)
}

function clear() {
    alert(`Goodbye World`)
}

