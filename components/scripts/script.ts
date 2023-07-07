import { generateMeme, windowBlur } from "./module";

window.onload = () => {
    const generate_btn: HTMLButtonElement = document.querySelector('.generate-btn') as HTMLButtonElement;

    generate_btn.addEventListener('click', generateMeme);

    window.addEventListener('visibilitychange', windowBlur);
}