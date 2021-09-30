const images = document.querySelectorAll('img');
const audio = document.querySelectorAll('audio');

// [...images].map(image => image.addEventListener('click', (event) => {
//     [...audio].find(clip => clip.id === event.target.id ? clip.play() : null);
// }));

let memo = {};
for (let image of images) {
    image.addEventListener('click', (event) => {
        const targetAnimal = event.target.id
        for (let clip of audio) {
            if (!memo[clip.id]) memo = {...memo, [clip.id] : clip } 
        } 
        if (memo[targetAnimal]) memo[targetAnimal].play()
    });
}
