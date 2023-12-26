import React from 'react';

import styles from './projects.module.css'
import Project from '../Project/Project'
import myfeira from '../../imageProjects/myfeira.PNG'
import michelnews from '../../imageProjects/michelnews.JPG'
import chatsocket from '../../imageProjects/Chat.PNG'
import cointoreal from '../../imageProjects/CoinToReal.JPG'
import pokedex from '../../imageProjects/pokedex.JPG'
import gif from '../../imageProjects/gif.JPG'
import cardapio from '../../imageProjects/restaurante.JPG'
import calculadora from '../../imageProjects/calculadora.JPG'
import CEP from '../../imageProjects/buscarCEP.JPG'
import todolist from '../../imageProjects/todolist.JPG'
import jogodavelha from '../../imageProjects/jogodavelha.JPG'
import agencia from '../../imageProjects/agenciabold.JPG'
import notas from '../../imageProjects/Notas.PNG'
import ControleEstoque from '../../imageProjects/ControleEstoque.PNG'
import HairTime from '../../imageProjects/hairtime.JPG'
import { FaReact, FaNodeJs, FaAws, FaBootstrap } from 'react-icons/fa'
import { SiCss3, SiMongodb, SiSocketdotio, SiJavascript, SiPrisma, SiSwagger, SiPostgresql, SiTypescript } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'

function PageProjects() {


    return (
        <div id="projects" className={styles.PageProjects}>
            <h1 className={styles.tituloProjects}>Meus projetos</h1>


            <Project
                image={ControleEstoque}
                titulo={"API Controle de Estoque"}
                descricao={"A API Controle de Estoque tem como objetivo oferecer controle completo para um negócio de vendas. É possível criar usuários, fazer login na plataforma, além de criar produtos e categorias, com todas as informações armazenadas no banco de dados PostgreSQL. Este projeto foi mais abrangente, pois utilizei o método de segurança JWT para o login de usuários e implementei criptografia para armazenar as senhas. Além disso, realizei a documentação da API utilizando o Swagger."}
                technologies={[
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>,
                    <SiTypescript className={styles.css}></SiTypescript  >,
                    <SiPostgresql className={styles.css}></SiPostgresql >,
                    <SiPrisma className={styles.aws}></SiPrisma >,
                    <SiSwagger className={styles.swagger}></SiSwagger >
                ]}
                linkProjeto={""}
                linkGitHub={"https://github.com/MichelRLima/API-Controle-de-Estoque"}
                linkSwagger={"https://api-controle-estoque.onrender.com/api-docs/"}
            ></Project>

            <Project
                image={myfeira}
                titulo={"MyFeira"}
                descricao={"O projeto My Feira é minha primeira experiência no desenvolvimento de uma API usando Node.js. Ele visa simplificar as compras de supermercado, atuando como um aplicativo de anotações para adicionar itens, especificar valores e quantidades, com cálculo automático do valor total. Utilizei React na parte frontal e uma API Node.js para interagir com o banco de dados MongoDB. Através da API, os clientes podem se cadastrar, fazer login, gerenciar listas de compras e acessar itens salvos. A API está hospedada na AWS e possui um domínio seguro (https://apimyfeira.online) com certificado de segurança pelo CloudFlare."}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>,
                    <SiMongodb className={styles.mongoDB}></SiMongodb>,
                    <FaAws className={styles.aws}></FaAws>]}
                linkProjeto={"https://myfeira.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/MyFeira"}
                linkSwagger={""}
            ></Project>

            <Project
                image={HairTime}
                titulo={"Projeto HairTime"}
                descricao={"O HairTime é meu primeiro projeto freelancer. Esse projeto é uma plataforma robusta e elegante, projetada para permitir que os clientes agendem seus serviços de corte de cabelo com facilidade e conveniência. Por meio do framework Express.js e do banco de dados MongoDB, criei uma aplicação que não apenas facilita o agendamento, mas também proporciona atualizações em tempo real sobre disponibilidade e permite a gestão eficiente de horários. Os principais recursos e funcionalidades são o agendamento simplificado para o cliente, através do link apropriado (https://bit.ly/3pT4yhJ), atualizações em tempo real dos agendamentos para evitar conflitos de horários (https://bit.ly/3NMliio) e um painel administrativo eficiente para fazer a alteração de horários disponíveis para agendamento(https://bit.ly/3PZ1Ku8)."}
                technologies={[
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>,
                    <SiMongodb className={styles.mongoDB}></SiMongodb>,
                    <FaAws className={styles.aws}></FaAws>]}
                linkProjeto={"http://ec2-52-14-95-83.us-east-2.compute.amazonaws.com:3002"}
                linkGitHub={"https://github.com/MichelRLima/Projeto-HairTime"}
                linkSwagger={""}
            ></Project>

            <Project
                image={michelnews}
                titulo={"Michel News"}
                descricao={"O site Michel News é uma página de notícias criada com EJS e Node.js. A plataforma é completa, oferecendo uma rota para que os usuários leiam notícias e uma rota de administrador que permite o cadastro e a remoção de notícias do site. Os usuários têm a capacidade de pesquisar as notícias disponíveis no site e, sempre que uma notícia é visualizada, o sistema registra a contagem de visualizações. Além disso, o site utiliza o MongoDB para armazenar as notícias e está hospedado na AWS."}
                technologies={[
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>,
                    <SiMongodb className={styles.mongoDB}></SiMongodb>,
                    <FaAws className={styles.aws}></FaAws>]}
                linkProjeto={"http://ec2-52-14-95-83.us-east-2.compute.amazonaws.com:3000"}
                linkGitHub={"https://github.com/MichelRLima/portal-de-noticia"}
                linkSwagger={""}
            ></Project>

            <Project
                image={chatsocket}
                titulo={"Chat Socket.IO"}
                descricao={"O chat Socket.IO é uma aplicação de chat criada utilizando HTML e CSS, em conjunto com o Node.js e o Socket.IO para possibilitar a troca de mensagens em tempo real. Este foi um dos meus primeiros projetos com o Node.js, e tive a oportunidade de aprender mais sobre websockets. O site está hospedado na AWS."}
                technologies={[
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <SiSocketdotio className={styles.socket}></SiSocketdotio>,
                    <FaNodeJs className={styles.nodejs}></FaNodeJs>,
                    <FaAws className={styles.aws}></FaAws>]}
                linkProjeto={"http://ec2-52-14-95-83.us-east-2.compute.amazonaws.com:3001"}
                linkGitHub={"https://github.com/MichelRLima/ChatSocket"}
                linkSwagger={""}
            ></Project>

            <Project
                image={cointoreal}
                titulo={"Coin To Real"}
                descricao={'O projeto é uma aplicação web chamada "Coin to Real" que permite aos usuários converter diferentes moedas estrangeiras para a moeda brasileira, o Real. A aplicação foi desenvolvida em React e utiliza várias bibliotecas e recursos para fornecer informações de câmbio em tempo real.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>]}
                linkProjeto={"https://coin-to-real.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Conversor-de-moedas"}
                linkSwagger={""}
            ></Project>

            <Project
                image={notas}
                titulo={"Notas"}
                descricao={'Com o objetivo de aprimorar meu desempenho como analista de suporte, desenvolvi uma plataforma de notas que permite adicionar, modificar, excluir e pesquisar frases de forma mais eficiente. As frases são armazenadas localmente utilizando o LocalStorage. Este projeto visa otimizar a utilização de frases prontas, facilitando a cópia de uma frase completa com apenas um clique e tornando possível a pesquisa de frases mais extensas através de palavras-chave.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>]}
                linkProjeto={"https://notas-servicedesk.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Notas_Service-Desk"}
                linkSwagger={""}
            ></Project>

            <Project
                image={pokedex}
                titulo={"Pokedex"}
                descricao={'O projeto é uma aplicação web chamada "Pokedex" que permite aos usuários buscar informações sobre Pokémon usando a API pública do PokeAPI. A aplicação foi desenvolvida em React e oferece uma interface interativa e informativa para os entusiastas de Pokémon.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>]}
                linkProjeto={"https://mypokedex-go.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Pokedex"}
                linkSwagger={""}
            ></Project>

            <Project
                image={gif}
                titulo={"Buscar GIF"}
                descricao={'O projeto é uma aplicação de busca e compartilhamento de GIFs que permite aos usuários pesquisar e visualizar uma variedade de GIFs com base em palavras-chave. A aplicação foi desenvolvida em React e utiliza a API do Giphy para buscar e exibir GIFs em tempo real.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>]}
                linkProjeto={"https://sharegif.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/BuscarGIF"}
                linkSwagger={""}
            ></Project>

            <Project
                image={cardapio}
                titulo={"Cardápio / Restaurante"}
                descricao={'Este projeto é uma aplicação React que permite aos usuários criar um pedido de alimentos e bebidas. Ele inclui uma variedade de recursos, como seleção de itens do cardápio, adição de observações, entrada de informações de entrega, escolha de forma de pagamento e cálculo do valor total do pedido. Além disso, oferece a opção de gerar um link para o WhatsApp com o pedido para facilitar a comunicação com o estabelecimento.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>]}
                linkProjeto={"https://restaurante-hungrychef.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Cardapio"}
                linkSwagger={""}
            ></Project>

            <Project
                image={calculadora}
                titulo={"Calculadora"}
                descricao={'Este projeto é uma calculadora simples construída com React. Ela permite aos usuários realizar operações de adição, subtração, multiplicação e divisão, além de cálculos matemáticos com números inteiros. A calculadora também fornece a capacidade de apagar um caractere por vez, limpar a tela e calcular o resultado das operações.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaBootstrap className={styles.boostrap}></FaBootstrap>]}
                linkProjeto={"https://mycalc-basic.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Calculadora"}
                linkSwagger={""}
            ></Project>
            <Project
                image={CEP}
                titulo={"Buscar CEP"}
                descricao={'Este projeto é uma aplicação web simples que permite aos usuários buscar informações de endereço com base em um CEP fornecido. Ele utiliza a API dos Correios (ViaCEP) para realizar a consulta e exibe as informações do endereço encontrado na página.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaBootstrap className={styles.boostrap}></FaBootstrap>]}
                linkProjeto={"https://search-mycep.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/BuscarCep"}
                linkSwagger={""}
            ></Project>
            <Project
                image={todolist}
                titulo={"Todo List"}
                descricao={'Este projeto é uma aplicação de lista de tarefas (Todo List) criada em React. Permite aos usuários adicionar tarefas, marcar tarefas como completadas e remover tarefas da lista.'}
                technologies={[
                    <FaReact className={styles.react}></FaReact>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <FaBootstrap className={styles.boostrap}></FaBootstrap>]}
                linkProjeto={"https://react-tasktodolist.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/TodoList"}
                linkSwagger={""}
            ></Project>
            <Project
                image={jogodavelha}
                titulo={"Jogo da velha"}
                descricao={'O jogo da velha foi criado com um HTML e CSS simples, aproveitando a biblioteca jQuery para interações mais dinâmicas e responsivas. O código HTML define a estrutura do jogo, enquanto o CSS é usado para estilizar os elementos.'}
                technologies={[
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <SiJavascript className={styles.js}></SiJavascript>]}
                linkProjeto={"https://game-jogodavelha.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Jogo-da-velha"}
                linkSwagger={""}
            ></Project>
            <Project
                image={agencia}
                titulo={"Agencia Bold"}
                descricao={'A Agência Bold criou um site impressionante para destacar seus serviços. Este código HTML utiliza CSS e JavaScript para criar uma experiência atraente e informativa para os visitantes.'}
                technologies={[
                    <AiFillHtml5 className={styles.html}></AiFillHtml5>,
                    <SiCss3 className={styles.css}></SiCss3>,
                    <SiJavascript className={styles.js}></SiJavascript>]}
                linkProjeto={"https://portfolio-agenciabold.netlify.app"}
                linkGitHub={"https://github.com/MichelRLima/Agencia-bold"}
                linkSwagger={""}
            ></Project>
        </div >
    )
}

export default PageProjects