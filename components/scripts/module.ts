// Arquivo que contém as funções principais do projeto

/** 
 * Função assíncrona que realiza a requisição para a API e retorna um meme aleatório.
 * Na função é utilizado o operador "await" para aguardar a resposta 
 * da chamada de API feita com a função "fetch" para a URL especificada. 
 * Dentro da função "then" encadeada, o método "json()" é chamado na resposta 
 * para converter os dados da resposta em formato JSON.
 * O resultado da conversão é um objeto JavaScript que contém informações sobre o meme, 
 * incluindo a URL da imagem, o título e o autor, que são em seguida passados como
 * parâmetros para outra função chamada updateDetails()
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
 * Função disparada quando
 * o usuário sai da página do projeto
 * 
 * @returns { string } Altera o título da página
 */
export const windowBlur = (): string => document.title = 'Go back :(';