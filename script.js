//ofnctionnalité 1
console.log("fonctionnalité 1")
var footer =
document.getElementsByTagName("footer")[0]
// footer.addEventListener("click", function(){console.log("clique")})

// fonctinonalité 1 bis
var click_number = 0
footer.addEventListener("click", function(){
  click_number +=1
  console.log("clic numéro "+ String(click_number))})

  // fonctionnalité 2
  var navbar_header = document.getElementById("navbarHeader")
  console.log(navbar_header);

  var navbar_toggler = document.getElementsByClassName("navbar-toggler")[0]

  let navbar_collapse = true;

  navbar_toggler.addEventListener("click", function(){
    navbar_header.classList.toggle("collapse")
  })
  //Fonctionnalité 3
  let editButtonRed = document.querySelectorAll('.btn-outline-secondary')[0];

  function btnToggle() {
      editButtonRed.style.color = 'red';
  };

  editButtonRed.onclick = btnToggle;

  //Fonctionnalité 4
  let editButtonGreen = document.querySelectorAll('.btn-outline-secondary')[1];
  let editButtonStatus = false;

  function btnToggleGreen() {
    if(editButtonStatus == false) {
      editButtonGreen.style.color = 'green';
      editButtonStatus = true;
    } else if (editButtonStatus == true) {
      editButtonGreen.style.color = 'black';
      editButtonStatys = false;
    };
  };

  editButtonGreen.onclick = btnToggleGreen;

  //Fonctionnalité 5
  let linkRel = document.getElementsByTagName('link')[0];
  let navBarHeader = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
  let nuclearStatus = false
  function nuclearToggle() {
    if(nuclearStatus == false) {
      console.log('wtf');
      linkRel.remove();
      nuclearStatus = true;
    } else if (nuclearStatus == true) {
      var head = document.head;
      var link = document.createElement("link");

      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

      head.appendChild(link);
    }
  }

  navBarHeader.ondblclick = nuclearToggle;

  //Fonctionnalité 6
  let viewBtn = document.querySelectorAll('.btn-success');
  let viewBtnStatus = false;

  function viewToggle(j) {
    let textCard = document.querySelectorAll('.card-text');
    let imageCard = document.querySelectorAll('.card-img-top');

    if(viewBtnStatus == false) {
      textCard[j].style.visibility = 'hidden';
      imageCard[j].style.width = '20%';
      imageCard[j].style.height = 'auto';
      viewBtnStatus = true;
    } else if(viewBtnStatus == true) {
      console.log('ok');
      textCard[j].style.visibility = 'visible';
      imageCard[j].style.width = '100%';
      imageCard[j].style.height = 'auto';
      viewBtnStatus = false;
    };
  };

  for (let j = 0; j < viewBtn.length; j++) {
    let button = viewBtn[j];
    button.addEventListener('mouseover', function() {
      viewToggle(j);
    });
  }

  //Fonctionnalité 7
  let rightBtn = document.querySelector('.btn-secondary');
  let cards = document.querySelectorAll('.col-md-4');
  let firstCard = document.querySelectorAll('.col-md-4')[0];
  let lastCard = cards[cards.length - 1];

  function fuckedUpToggle() {
    console.log("ok");
    var parentDiv = firstCard.parentNode;
    parentDiv.insertBefore(lastCard, firstCard);
  }

  rightBtn.onclick = fuckedUpToggle;
