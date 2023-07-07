// Arquivo que contém as funções principais do projeto

/** 
 * Função assíncrona que realiza a requisição para a API e retorna um meme aleatório.
 * Na função é utilizado o operador "await" para aguardar a resposta 
 * da chamada de API feita com a função "fetch" para a URL especificada, que em seguida
 * é convertida em json e então é feita uma chamada para a função updateDetails(), passando
 * os dados de resposta da API como parâmetros
*/
export async function generateMeme(): Promise<void> {
    const url: string = 'https://meme-api.com/gimme';

    const response: Response = await fetch(url);
    const data: Record<string, string> = await response.json();
    updateDetails(data.url, data.title, data.author);
}

/** 
 * Função que atualiza a página com os dados recebidos da API,
 * alterando o conteúdo dos elementos com os dados recebidos
 * da API, passados como parâmetros
 * 
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
 * Função disparada quando o usuário sai da página do projeto.
 * Utilizando operação ternária, ela verifica se o usuário está
 * na janela atual ou não e atualiza o título do documento
 * @returns Altera o título da página
 */
export const windowBlur = (): string => 
    document.visibilityState === 'hidden' 
        ? document.title = 'Go back :(' 
        : document.title = 'Memes Generator';