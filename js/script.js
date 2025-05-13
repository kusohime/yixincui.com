const imagesWithCaptions = [
    { src: "cats/1.jpeg", caption: "A moggy reading <em>How to Read Lacan</em> by Slavoj Žižek at The Book Trader, NYC." },
    { src: "cats/2.jpeg", caption: "A tabby reading The Portable Karl Marx compiled by Eugene Kamenka." },
    { src: "cats/3.jpeg", caption: "A Bombay reading a Portuguese edition of Anti-Oedipus by Gilles Deleuze and <s>Féline</s> Félix Guattari." },
    { src: "cats/4.jpeg", caption: "A pica tabby eating Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5)." },
    { src: "cats/5.jpeg", caption: "A (suspected) tabby conducting Frivolitätenmusik with a murine ensemble. An illustration by Edward Gorey from Old Possum’s Book of Practical Cats by T.S. Eliot." },
    { src: "cats/6.jpeg", caption: "A white cat cosplaying as a nun in a Horae, from Medieval Cats by felinology professor Catherine Nappington." }
];

// Create a shuffled array to track the order of images
let shuffledImages = [...imagesWithCaptions];
let currentIndex = 0;

// Function to shuffle the images
function shuffleImages() {
    for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
}

// Shuffle the images initially
shuffleImages();

const imageElement = document.getElementById("dynamic-image");
const captionElement = document.getElementById("image-caption");

// Function to update the image and caption
function updateImageAndCaption() {
    const { src, caption } = shuffledImages[currentIndex];
    imageElement.src = src;
    captionElement.textContent = caption;
}

// Set the initial image and caption
updateImageAndCaption();

// Change the image and caption on click
imageElement.addEventListener("click", () => {
    currentIndex++;

    // If we've exhausted all images, reshuffle and restart
    if (currentIndex >= shuffledImages.length) {
        shuffleImages();
        currentIndex = 0;
    }

    updateImageAndCaption();
});


function updateImageAndCaption() {
    const { src, caption } = shuffledImages[currentIndex];
    imageElement.src = src;
    captionElement.innerHTML = caption; // Use innerHTML to render HTML tags
}
