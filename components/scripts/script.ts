import { generateMeme, windowBlur } from "./module";

window.onload = () => {
    const generate_btn: HTMLButtonElement = document.querySelector('.generate-btn') as HTMLButtonElement;
    
    const meme_img: HTMLImageElement = document.querySelector('img') as HTMLImageElement;

    meme_img.setAttribute('src', '../imgs/lupa.png');

    generate_btn.addEventListener('click', generateMeme);

    window.addEventListener('blur', windowBlur);
}