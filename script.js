function func() {
    let selectChoice = document.getElementsByName("product-choice")[0].value;
    console.log(selectChoice);

    if (selectChoice == 2) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="checkbox" name="scales">\n \
        \t<label for="scales">scales</label>\n \
        <input type="checkbox" name="horns">\n \
        \t<label for="horns">horns</label> \
        ';
    }
    else if (selectChoice == 3) {
        let checkBox = document.getElementById("option-choices");
        checkBox.innerHTML = '\
        <input type="checkbox" name="scales">\n \
        <label for="scales">scales</label>\n \
        <input type="checkbox" name="horns">\n \
        <label for="horns">horns</label>\n \
        <input type="checkbox" name="fields">\n \
        <label for="fields">fields</label> \
        ';
    }

    let sums = [100, 200, 400];

    let resultSum = sums[selectChoice] + checkOptions(selectChoice);
    let amount = document.getElementById("emount-of-products").value;
    resultSum *= amount;

    console.log(resultSum);
    let result = document.getElementById("result");
}

function checkOptions(choice) {
    if (choice == 2) {
        let checkbox1 = document.getElementsByName("scales");
        let checkbox2 = document.getElementsByName("horns");

        return checkbox1.checked * 20 + checkbox2.checked * 40;
    }
}