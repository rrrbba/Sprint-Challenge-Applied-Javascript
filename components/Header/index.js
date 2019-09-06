// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const topStuff = document.querySelector('.header-container');

function Header() {
    //create element
    const head = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    
    //create classes
    head.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = "SMARCH 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";

    //append 
    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    
    
    return head
}

topStuff.appendChild(Header());