let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 200); // 200ms = 0.2 seconds
});
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;

        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
