// Arquivo que contém as funções principais do projeto

/** 
 * Função que realiza a requisição para a API 
 * e retorna um novo meme gerado
*/
export async function generateMeme (): Promise<void> {
    /**url da API */
    const url: string = 'https://meme-api.com/gimme';

    await fetch(url).then(
        (res: Response) => res.json().then(
            (data: Record<string, string>) => updateDetails(data.url, data.title, data.author)
        )
    ); 
}

/** Função que atualiza a página com os dados recebidos da API
 * @param url url da imagem do meme
 * 
 * @param title Título do meme/postagem
 * 
 * @param author Nome do autor do meme
*/
export function updateDetails (url: string, title: string, author: string): void {
    const meme_img: HTMLImageElement = document.querySelector('.meme-generator > img') as HTMLImageElement;
    const meme_title: HTMLHeadingElement = document.querySelector('.meme-title') as HTMLHeadingElement;    
    const meme_author: HTMLDivElement = document.querySelector('.meme-author') as HTMLDivElement;

    meme_img.setAttribute('src', url);
    
    meme_title.innerHTML = title;
 
    meme_author.innerHTML = author;
}

/** 
 * Função disparada quando
 * o usuário sai da página do projeto
 * 
 * @returns { string } Altera o título da página
 */
export const windowBlur = (): string => document.title = 'Go back :(';