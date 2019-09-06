// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        //make an empty array that will hold all the article objects
       const allArticles = [];
       //make each article by topic set to the specific topic
       articlesByTopicObject = data.data.articles;
       
       //make variable that is set to the values of the objects 
       const arrayObjectValues = Object.values(articlesByTopicObject);


       //iterate through the component
       arrayObjectValues.forEach(data => {
           //iterate through data and push the data into the array for all the article objects
           data.forEach(array => {
               allArticles.push(array);
           });
       });

       //iterate through array containing all articles
       allArticles.forEach(object => {
           //make variable for each specific article and set it to the function
           //so that you have the author, picture, card shown after appending
           const newArticle = Article(object);
           //create variable for card container and set it to the class of cards-container
           const cardsContainer = document.querySelector('.cards-container');
           //append the articles to the cards container
           cardsContainer.appendChild(newArticle);
       })


    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

function Article(object){
    const card = document.createElement('div');
    const headlineText = document.createElement('div');
    const author = document.createElement('div');
    const imgCon = document.createElement('div');
    const imgAct = document.createElement('img');
    const byAuthor = document.createElement('span');

    //create class
    card.classList.add('card');
    headlineText.classList.add('headline');
    author.classList.add('author');
    imgCon.classList.add('img-container');
    
    //add content 
    imgAct.src = object.authorPhoto;
    headlineText.textContent = object.headline;
    byAuthor.textContent = `By ${object.authorName}`;

    //append
    imgCon.appendChild(imgAct);
    author.appendChild(imgCon);
    card.appendChild(headlineText);
    card.appendChild(author);
    author.appendChild(byAuthor);

    return card

}