var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var bookmarksList = [];

// var closeBtn = document.getElementById("closeBtn");
// var boxModal = document.querySelector(".box-info");

if(localStorage.getItem('bookmarksList') != null){

  bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));
  displayBookmarks();
}

submitBtn.addEventListener("click", function () {
  var bookmark = {
    name: siteName.value,
    url: siteURL.value,
  };

  bookmarksList.push(bookmark);

  localStorage.setItem("bookmarksList", JSON.stringify(bookmarksList));

  displayBookmarks()


});


function displayBookmarks(){

  var container = '';

  for(var i=0; i<bookmarksList.length; i++){
    container +=`
    <tr>
      <td>${i+1}</td>
      <td>${bookmarksList[i].name}</td>
      <td>
          <a href="${bookmarksList[i].url}" target="_blank">
              <button class="btn btn-visit">
                  <i class="fa-solid fa-eye pe-2"></i>
                  Visit
              </button>
          </a>
      </td>
      <td>
          <button onclick="deleteBookmark(${i})" class="btn btn-danger">
          <i class="fa-solid fa-trash-can pe-2"></i>
          Delete
          </button>
      </td>
    </tr>
    `
  }
  
  document.getElementById("tableBody").innerHTML = container;

}

function deleteBookmark(index){

  bookmarksList.splice(index, 1);

  localStorage.setItem("bookmarksList", JSON.stringify(bookmarksList));

  displayBookmarks()

}