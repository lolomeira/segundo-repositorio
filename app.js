function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta, resposta)

    let flashcard = document.getElementById('flashcard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML = `
         <div class="cartao__conteudo">

                <h3>Missão</h3>
            
                <div class="cartao__conteudo__pergunta">
                <p>Saiba qual é a missão de nossa empresa!</p>

                </div>
                
                <div class="cartao__conteudo__resposta">
                    <p>Nossa missão é, trazer alegria para as pessoas através de momentos de qualidade em familia, tomando uma cana bem gelada com um pastel frito na hora!!!</p>
                </div>   
                `
            flashcard.appendChild(cartao);


            }