import './Ask.css';
import React, { useState } from 'react';
function Ask(){
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);

    const handleToggle1 = () => {
    setChecked1(!checked1);
    };
    const handleToggle2 = () => {
    setChecked2(!checked2);
    };
    const handleToggle3 = () => {
    setChecked3(!checked3);
    };
    const handleToggle4 = () => {
    setChecked4(!checked4);
    };
    const handleToggle5 = () => {
    setChecked5(!checked5);
    };
    const handleToggle6 = () => {
    setChecked6(!checked6);
    };
    const handleToggle7 = () => {
    setChecked7(!checked7);
    };
    return(
        <div className="faq">
            <h2 className="text-center">Ajuda rápida:</h2>
            <ul className="faq-menu-items text-center">
                <li className="faq-menu-item">
                    <input type="checkbox" id="faq-1" className="faq-toggle" checked={checked1} onChange={handleToggle1}/>
                        <label htmlFor="faq-1" className="faq-item-link" >
                            Eu me inscrevi. Por que não estou obtendo recursos Premium?
                        </label>
                        <div className="faq-answer">
                            <p>A sua conta pode não estar configurada corretamente. Tente verificar suas configurações e entrar em contato com o suporte ao cliente se continuar tendo problemas.</p>
                        </div>
                </li>
                <li className="faq-menu-item">
                    <input type="checkbox" id="faq-2" className="faq-toggle" checked={checked2} onChange={handleToggle2}/>
                        <label htmlFor="faq-2" className="faq-item-link" >
                            Como posso pagar pelo Spotify?
                        </label>
                        <div className="faq-answer">
                            <p>O Spotify aceita diversos métodos de pagamento, incluindo cartão de crédito e débito, PayPal, boleto bancário e outros meios disponíveis em sua região. Para verificar as opções de pagamento disponíveis para você, acesse as configurações de pagamento na sua conta do Spotify.</p>
                        </div>
                </li>
        
                <li className="faq-menu-item">
                    <input type="checkbox" id="faq-3" className="faq-toggle" checked={checked3} onChange={handleToggle3}/>
                        <label htmlFor="faq-3" className="faq-item-link" >
                            Como altero meu endereço de e-mail?
                        </label>   
                        <div className="faq-answer">
                            <p>Para alterar o endereço de e-mail associado à sua conta do Spotify, acesse as configurações da conta e selecione a opção "Editar perfil". Em seguida, clique em "Editar" ao lado do campo de e-mail e insira o novo endereço de e-mail. Certifique-se de confirmar as alterações clicando em "Salvar perfil" antes de sair.</p>
                        </div>
                </li>
                <li lass="faq-menu-item">
                        <input type="checkbox" id="faq-4" className="faq-toggle" checked={checked4} onChange={handleToggle4}/>
                            <label htmlFor="faq-4" className="faq-item-link" >
                                Criei uma nova conta. Posso transferir minhas playlists, músicas salvas e seguidores?
                            </label>
                            <div className="faq-answer">
                                <p>Sim, é possível transferir suas playlists, músicas salvas e seguidores de uma conta antiga para uma nova. Para fazer isso, você precisará entrar em contato com o suporte ao cliente do Spotify e solicitar a transferência de dados. Este processo pode levar alguns dias para ser concluído.</p>
                            </div>
                </li>
                <li className="faq-menu-item">
                    <input type="checkbox" id="faq-5" className="faq-toggle" checked={checked5} onChange={handleToggle5}/>
                        <label htmlFor="faq-5" className="faq-item-link" >
                            Como funciona a oferta Premium de 1 mês grátis?
                        </label>
                        <div className="faq-answer">
                            <p>A oferta Premium de 1 mês grátis é uma promoção oferecida pelo Spotify para novos usuários que desejam experimentar o serviço Premium. Para aproveitar a oferta, basta criar uma nova conta no Spotify e selecionar a opção Premium durante o período de inscrição. Você poderá desfrutar de todos os recursos Premium do Spotify gratuitamente por um mês inteiro.</p>
                        </div>
                </li>
                <li className="faq-menu-item">
                    <input type="checkbox" id="faq-6" className="faq-toggle" checked={checked6} onChange={handleToggle6}/>
                        <label htmlFor="faq-6" className="faq-item-link" >
                            Como solucionar problemas do Spotify no PlayStation?
                        </label>
                        <div className="faq-answer">
                            <p>Se você está tendo problemas para usar o Spotify no PlayStation, verifique se o aplicativo está atualizado para a versão mais recente. Certifique-se também de que sua conta do PlayStation Network esteja conectada à sua conta do Spotify. Se ainda estiver enfrentando problemas, tente reiniciar o PlayStation e o roteador de internet para resolver problemas de conexão.</p>
                        </div>
                </li>
                <li className="faq-menu-item">
                    <input type="checkbox" id="faq-7" className="faq-toggle" checked={checked7} onChange={handleToggle7}/>
                        <label htmlFor="faq-7" className="faq-item-link" >
                            O que é sessão privada e como isso afeta minhas recomendações? 
                        </label>
                        <div className="faq-answer">
                            <p>A sessão privada é uma opção disponível no Spotify que permite aos usuários ouvirem música sem que suas escolhas afetem suas recomendações de músicas. Quando a sessão privada está ativada, o Spotify não registra as músicas ouvidas pelo usuário, não atualiza as playlists do usuário com base em suas escolhas e não usa as inhtmlFormações de histórico de escuta do usuário para personalizar suas recomendações.</p>
                        </div>
                    
                </li>
            </ul>
        </div>
    );
}

export default Ask