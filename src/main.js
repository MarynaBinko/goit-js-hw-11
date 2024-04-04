
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const gallery = new SimpleLightbox('.gallery a',{
    overlayOpacity: 8,
    captionData: "href",
    captionDelay: 250,
    captionClass: "text-center"
  });



const container = document.querySelector(".gallery");
const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);
 



function handleSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input[type='text']");
    const searchQuery = input.value;
    console.log(searchQuery);  
    searchPictures(searchQuery)
    .then(data => {
        container.innerHTML = createMarkup(data);
        gallery.refresh();
    })
    .catch(errorMsg => showToast(errorMsg))
    .finally(()=> form.reset())
}

const  API_KEY = "43197174-dcc5f5044572d8f441379a766";

function searchPictures(searchQuery){
    const params = new URLSearchParams({
        key: API_KEY,
        q: "searchQuery",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    
    return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
        if(!response.ok){
            throw new Error(showToast(errorMsg));
        }
        return response.json()
    })
 
}


function createMarkup(arr) {
    return arr 
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>{`
    <ul class="list">
        <li class="list-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}">
            <div class="image-details">          
                <h2 class="likes">Likes: ${likes} </h2>
                <h2 class="views">Views: ${views}  </h2>                                
                <h2 class="comments">Comments: ${comments}</h2>               
                <h2 class="downloads">Downloads: ${downloads}</h2>                           
            </div>
        </li>
    </ul>  `})
    .join("")
}






let toastBox = document.getElementById(`toastBox`);
const errorMsg = `<i class="fa-solid fa-xmark"></i>Sorry, there are no images matching your search query. Please try again!`;
function showToast(message, className) {
    let toast = document.createElement(`div`);
    toast.classList.add(`toast`);
    toast.classList.add(className);
    toast.innerHTML = message;

    toastBox.appendChild(toast);

    
    setTimeout(() => {
        toast.remove();
    }, 6000);
    
};

// Css loader---------------------------------------------------------------
// const path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader'],
//             },
//         ],
//     },
// };