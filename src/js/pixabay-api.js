// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// const lightbox = new SimpleLightbox('.gallery li');

// const gallery = new SimpleLightbox('.gallery a',{
//     overlayOpacity: 8,
//     captionData: "alt",
//     captionDelay: 250,
//     captionClass: "text-center"
//   });

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// let toastBox = document.getElementById(`toastBox`);
// const errorMsg = `<i class="fa-solid fa-xmark"></i>Rejected promise in ${delay}ms`;
// function showToast(message, className) {
//     let toast = document.createElement(`div`);
//     toast.classList.add(`toast`);
//     toast.classList.add(className);
//     toast.innerHTML = message;

//     toastBox.appendChild(toast);

//     const delay = document.querySelector('input[name="delay"]').value;
//     setTimeout(() => {
//         toast.remove();
//     }, delay);
    
// };

// Css loader---------------------------------------------------------------
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};