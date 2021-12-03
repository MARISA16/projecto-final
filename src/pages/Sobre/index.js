import React from 'react';
import sobrenos from '../../assets/sobrenos.png';
import iconLinkedin from '../../assets/icon-linkedin.jpg';
import iconEmail from '../../assets/icon-email.jpg';



import './styles.css';

function Sobre() {
    return (

        <section>
            <div className='sobre-nos'>
                <div>
                    <div className='paragrafo-sobrenos'>
                        <h1>Nossa história</h1>
                        <p>
                            Já faz 6 anos que moro no Brasil. De 2014 para cá, foi uma experiência de muito aprendizado. Vim para o Brasil para estudar na Universidade da Integração Internacional da Lusofonia Afro-Brasileira (UNILAB), que é uma autarquia vinculada ao Ministério da Educação da República Federativa do Brasil, instalada na cidade de Redenção, na Macrorregião do Maciço de Baturité -CE, a 55 quilômetros de Fortaleza, capital do estado de Ceará. Com integração do Brasil aos países da Comunidade dos Países de Língua Portuguesa (CPLP) e que possuem o português como língua oficial. São os países: Angola, Cabo Verde, Guiné-Bissau, Moçambique, São Tomé e Príncipe, Portugal e Timor-Leste. Não tive problemas de moradia, alimentação, saúde e nem a com legalidade, porque a Universidade sempre cuidou muito bem disso. A grande dificuldade foi ter que me adaptar em uma sociedade totalmente diferente da minha realidade em termos culturais. Fiquei em choque e ao mesmo tempo, em pânico de não quer ficar mais no Brasil. Além disso, já passei por problemas de instabilidade social, onde criminosos é que têm mais voz, e já fui vítima de racismo.
                    </p>
                        <p>Para a maioria de nós, o Brasil se resume a cidades como São Paulo. Quando cheguei no Ceará, foi um susto, pois a realidade é diferente do que imaginei. Assim, muitas pessoas não conseguem se adaptar, seja pelo choque cultural, a infraestrutura, ou o racismo e preconceito que sofremos. </p>
                        <p>Visto isso, surgiu a vontade de fazer um espaço de informações e dicas para outras pessoas que planejam ou já vieram para o Brasil, especialmente originárias do continente africano, principalmente comunidade de países da língua portuguesa. Onde possam se sentir acolhidos e procurar serviços e informações tão importante quando chegamos em um país tão diversificado quanto o Brasil.
                    </p>
                        <p>Projeto final do curso de Bootcamp Desenvolvedora Front-end na Reprograma. Onde cada aluna elaborou seu próprio projeto, incluindo design, conteúdo, temas. No projeto apresentado aqui, foi utilizado conhecimentos em linguagem de programação.
                    </p>
                    </div>
                    <div className='imagem-contato'>
                        <div>
                            <h2 className='contato'>Contato:</h2>
                            <ul>
                                <li><a href='mailto:marisa2014antniomarisa@outlook.com' target="_blank">
                                <img  className='icon'src={iconEmail }></img>
                                    <span>marisa2014antniomarisa@outlook.com </span>

                                </a></li>
                                <li><a href='https://www.linkedin.com/in/marisa-ant%C3%B3nio/' target="_blank">
                                    <img  className='icon'src={iconLinkedin}></img>
                                    <span>marisa-antonio</span>
                                </a></li>
                            </ul>
                        </div>
                        <div>
                            <img className='imagem-sobrenos' src={sobrenos} alt='Imagem'></img>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
export default Sobre;