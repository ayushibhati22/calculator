const a = document.querySelectorAll('.button');
const b = document.querySelector('.input');
const container = document.querySelector('.container');
let string = "";
let op = '';
let calulated = false


container.addEventListener("click", (e) => {
    b.scrollLeft = b.scrollWidth;
    if (e.target.id === 'op') {
        if (e.target.innerHTML === "=") {
            if (string === '') {
                return
            }
            else if (op) {
                const removeLastOperator = string.slice(0, -1);
                let result = eval(removeLastOperator)
                b.value = result;
                string = result
            }
           
            else {
                let result = eval(string)
                b.value = result;
                string = result
            }
            calulated = true
            op = ''
        }
        else if (string === '') {
            op = ''
        }
        else if (e.target.innerHTML === "Del") {
            
            if (string === '' || e.target.id === 'num') {
                


                string = e.target.innerHTML

                b.value = string;


            }
            string = b.value.slice(0, -1);
            b.value = string;
        }
        else if (op === '') {
            string = string + e.target.innerHTML
            b.value = string
            op = e.target.innerHTML;
        }
        else if (op !== e.target.innerHTML) {
            const removeLastOperator = string.slice(0, -1)
            string = removeLastOperator + e.target.innerHTML
            b.value = string
            op = e.target.innerHTML;
        }
    }
    else if (e.target.className === 'button' || e.target.className === 'button color' || e.target.className === 'button grey') {
        if (e.target.innerHTML === "AC") {
            b.value = "";
            string = ''
        } 
        else if (string && op === '') {
            if (e.target.id === 'num' && calulated) {
                string = e.target.innerHTML;
                b.value = e.target.innerHTML;
            } else {
                string = string + e.target.innerHTML
                b.value = string;
            }
        }
        else {
            string = string + e.target.innerHTML
            b.value = string;

        }
        op = ''
        calulated = false
    }
}
)
