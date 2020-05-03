// we simulate getting data from DB/SERVER/API
function getDataFromDB() {
  return [
    { id: '1', title: 'JS is amazing', body: 'JS is amazing and so easy to learn. I like it a lot!', author: 'CB' },
    {
      id: '2',
      title: 'DOM manipulation is easy',
      body:
        'DOM Manipulation using JS is straightforward and fun! You can intercept user actions and change things in the HTML and also in CSS.',
      author: 'Anonymous',
    },
    {
      id: '3',
      title: 'CSS is nice',
      body: 'To style your HTML page is so much fun! I like playing with colosand images!',
      author: 'AB',
    },
    {
      id: '4',
      title: 'Ana are mere',
      body: 'this is my awesome comment',
      author: 'John',
    },
  ];
};

// We set a convention
// All variables that container a DOM element
// should start with $
var $comments = document.querySelector('.comments');
var index = 5;

function createCommentElement(title, comment, author, index) {
  // we create an article element
  var $article = document.createElement('article');
  // console.dir($article);

  // 1. create header element with text
  var $header = document.createElement('header');
  $header.innerText = title;

  // 2. add header element to $article
  $article.appendChild($header);

  // 3. create p elmenet with class comment and text
  var $p = document.createElement('p');
  $p.innerText = comment;
  $p.classList.add('comment');

  // 4. add p element to $article
  $article.appendChild($p);

  // 5. create footer element with text
  var $footer = document.createElement('footer');
  $footer.innerText = author;

  // 6. add footer element to $article
  $article.appendChild($footer);

  // 7. add like btn to $article
  var $likeBtn = document.createElement('button');
  $likeBtn.innerText = "Like";
  $likeBtn.classList.add('likebtn');
  $article.appendChild($likeBtn);

  // 8. add delete btn to $article
  var $deleteBtn = document.createElement('button');
  $deleteBtn.innerText = "Remove";
  $deleteBtn.setAttribute('data-id', 'id');
  $article.appendChild($deleteBtn);
  
  // 9. add index to comments
  
  return $article;
};

function listComments(comments) {
  for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    console.log(comment);

    var $article = createCommentElement(comment.title, comment.body, comment.author,);

    // parent.appendChild(element) will insert element at the end of parent
    $comments.appendChild($article);
  }
};

var $title = document.querySelector('input[name="title"]');
var $comment = document.querySelector('textarea[name="comment"]');
var $author = document.querySelector('input[name="author"]');

// add comment on page
function addComment(event) {
  console.log('add comment');
  // we stop the submit event form happening
  event.preventDefault();
  console.dir(event);
  console.log($title.value);
  console.log($comment.value);
  console.log($author.value);

  var $article = createCommentElement($title.value, $comment.value, $author.value);

  // parent.appendChild(element) will insert element at the end of parent
  $comments.appendChild($article);

  var comments = getDataFromDB();
  console.log(comments); 
};

$searchInput = document.querySelector('input[name="search"]');

function onSearch(event) {
  console.log(event);
  console.log($searchInput.value);
};

function onSearchInputChange(event) {
  console.log(event);
  console.log($searchInput.value);
};

// event which triggers when document is loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('document is loaded');
  // get comments from db
  var comments = getDataFromDB();
  console.log(comments);
  // list comments in dom
  listComments(comments);

  // pentru a opri efectul de refresh al paginii cand dam submit
  var $form = document.querySelector('form');
  $form.addEventListener('submit', addComment);

  $searchButton = document.querySelector('.search');
  $searchButton.addEventListener('click', onSearch);
  
  // input event triggres when typing in the input field or when it changes
  $searchInput.addEventListener('input', onSearchInputChange);

  function deleteComm () {
    var delComm = this.parentElement;
    delComm.remove();
  };
  var delBtn = document.querySelectorAll('[data-id]');
  for (var i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener('click', deleteComm);
  };
});
 


