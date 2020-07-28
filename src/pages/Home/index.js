import React, { Component } from 'react';
import mapashome from '../../assets/mapashome.png';
import OpcoesHome from '../../components/OpcoesHome';
import './styles.css';



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {

        return (
            <main>
                <div className='div-nao-mexer'>
                    <div className='container-resumo-fotos'>
                        <div className='div-imagem'>
                            <img className='imagem-home' src={mapashome} alt='Imagem de mapas'></img>
                        </div>

                        <div className='div-resumo'>
                            <h1>Guia do Kamba</h1>
                            <p> Guia do Kamba surge pelas necessidades de prestações de serviços para os imigrantes do Continente Africano, em especial dos países da Comunidades dos Países da Língua Portuguesa (CPLP) que chegaram ou que estão pensando em vir para Brasil para estudar ou morar. O propósito do site é de AJUDAR nas informações que possam orientar com dicas, Serviços Úteis, Empregos, e Histórias compartilhadas. </p>

                        </div>
                    </div>
                    <div className='container-opcoes'>

                        <OpcoesHome
                            nomedobotao="Pensando morar no Brasil?"
                            clique="/dicas"
                            texto="Aconselho a se informar desde seu país, como é a cidade onde vai morar, como é a cultura, a gastronomia, a infraestrutura da cidade, fazer pesquisa do tipo: PLANEJAMENTO, é o ponto mais importante...Ler mais"
                        />
                        <OpcoesHome
                            nomedobotao="Conheça nossa história"
                            clique="/sobre"
                            texto="Já faz 6 anos que moro no Brasil. De 2014 para cá, foi uma experiência de muito aprendizado. Vim para o Brasil para estudar na Universidade da Integração Internacional da Lusofonia Afro-Brasileira (UNILAB)...Ler mais"
                        />
                        <OpcoesHome
                            nomedobotao="Veja as histórias de outros imigrantes"
                            clique="/depoimentos"
                            texto="Em 2015, um ano depois da minha chegada, fiquei grávida e foi o ano mais desafiador na minha vida, porque tinha que conciliar a gravidez com os estudos. Em agosto de 2016, dei à luz ao meu primogênito, a razão da minha vida e das minhas conquistas...Ler mais"
                        />



                    </div>

                </div>
               </main>
        )
    }
}


export default Home;