var dice, rolls, item, sum;

// Describe this function...
function ShowTotal() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
}

// Describe this function...
function ShowRolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let element_list2 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list2.appendChild(new_li);
  });
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function ShowResult() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (rolls.reduce((a,b) => a+b, 0) == sum) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You Win!';
  } else if (rolls.reduce((a,b) => a+b, 0) < sum) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'Keep Going!';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'You Lost!';
  }
}

// Describe this function...
function ShowInfo() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  ShowRolls();
  ShowTotal();
  ShowResult();
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
sum = 11;
ShowInfo();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  ShowInfo();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  ShowInfo();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = '0';
  let element_info4 = document.getElementById('info');
  element_info4.innerText = 'Keep Playing!';

});