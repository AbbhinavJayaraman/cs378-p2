// Source: https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function

const pizza_minus = document.getElementById('pizza-minus');
const pizza_plus = document.getElementById('pizza-plus');
const pizza_dec = change_quantity('pizza', -1);
const pizza_inc = change_quantity('pizza', 1);
pizza_minus.addEventListener('click', pizza_dec); 
pizza_plus.addEventListener('click', pizza_inc);

const proats_minus = document.getElementById('proats-minus');
const proats_plus = document.getElementById('proats-plus');
const proats_dec = change_quantity('proats', -1);
const proats_inc = change_quantity('proats', 1);
proats_minus.addEventListener('click', proats_dec); 
proats_plus.addEventListener('click', proats_inc);

const pbj_minus = document.getElementById('pbj-minus');
const pbj_plus = document.getElementById('pbj-plus');
const pbj_dec = change_quantity('pbj', -1);
const pbj_inc = change_quantity('pbj', 1);
pbj_minus.addEventListener('click', pbj_dec); 
pbj_plus.addEventListener('click', pbj_inc);

const tikka_minus = document.getElementById('tikka-minus');
const tikka_plus = document.getElementById('tikka-plus');
const tikka_dec = change_quantity('tikka', -1);
const tikka_inc = change_quantity('tikka', 1);
tikka_minus.addEventListener('click', tikka_dec); 
tikka_plus.addEventListener('click', tikka_inc);

const place_order = document.getElementById('order');
const clear_all = document.getElementById('clear');
place_order.addEventListener('click', order); 
clear_all.addEventListener('click', clear);

const costs = {
    "pizza": 1,
    "proats": 8,
    "pbj": 5,
    "tikka": 5
};

let total = 0;


let subtotal_text = document.getElementById(`subtotal-text`);

function get_quantity(name) {
    return document.getElementById(`${name}-quantity`);
}

function change_quantity(name, increment) {
    return function() {
        let quantity = get_quantity(name);
        if (increment > 0) {
            quantity.innerHTML = parseInt(quantity.innerHTML) + increment;
            total += costs[name];
            subtotal_text.innerHTML = `Subtotal: $${total}`;
        }
        else if (increment < 0) {
            if (quantity.innerHTML > 0) {
                quantity.innerHTML = parseInt(quantity.innerHTML) - (-increment);
                total -= costs[name];
                subtotal_text.innerHTML = `Subtotal: $${total}`;
            }
        }
    }

}

function order() {
    let pizzas_q = parseInt(get_quantity("pizza").innerHTML);
    let proats_q = parseInt(get_quantity("proats").innerHTML);
    let pbj_q = parseInt(get_quantity("pbj").innerHTML);
    let tikka_q = parseInt(get_quantity("tikka").innerHTML);

    sum = pizzas_q + proats_q + pbj_q + tikka_q;

    if (sum === 0) {
        alert(`No items in cart`)
    }
    else {
        let summary = `Order Placed:\n`;
        if (pizzas_q > 0) {
            summary += `${pizzas_q} Pizza Slices\n`;
        }
        if (proats_q > 0) {
            summary += `${proats_q} Proat Bowl\n`;
        }
        if (pbj_q > 0) {
            summary += `${pbj_q} Gourmet PB & J\n`;
        }
        if (tikka_q > 0) {
            summary += `${tikka_q} Chicken Tikka\n`;
        }
        alert(summary);
    }


}

function clear() {
    let names = Object.keys(costs);
    names.forEach( function (name) {
        let quantity = get_quantity(name);
        quantity.innerHTML = 0 + "";
    });
    subtotal_text.innerHTML = `Subtotal: $0`;
    alert(`Order Cleared`)
}

