import './Ask.css';
import $ from 'jquery';
import React, { useEffect } from 'react';


function Ask(){
   
  useEffect(() => {
    $(document).ready(function() {
      $('.accordion-button').off('click').on('click', function() {
        const target = $(this).attr('data-bs-target');
        if ($(target).hasClass('show')) {
          $(this).removeClass('collapsed');
          $(target).slideUp('fast');
          $(target).removeClass('show');
        } else {
          $('.accordion-button').removeClass('collapsed');
          $('.accordion-collapse').slideUp('fast');
          $('.accordion-collapse').removeClass('show');
          $(this).addClass('collapsed');
          $(target).slideDown('fast', function() {
            $(this).addClass('show');
          });
        }
      });
    });
  }, []);
  
      
return(
    <div className="faq">
        <h2 className="text-center">Ajuda rápida:</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Eu me inscrevi. Por que não estou obtendo recursos Premium?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                A sua conta pode não estar configurada corretamente. Tente verificar suas configurações e entrar em contato com o suporte ao cliente se continuar tendo problemas.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Como posso pagar pelo Spotify?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                O Spotify aceita diversos métodos de pagamento, incluindo cartão de crédito e débito, PayPal, boleto bancário e outros meios disponíveis em sua região. Para verificar as opções de pagamento disponíveis para você, acesse as configurações de pagamento na sua conta do Spotify.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Como altero meu endereço de e-mail?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Para alterar o endereço de e-mail associado à sua conta do Spotify, acesse as configurações da conta e selecione a opção "Editar perfil". Em seguida, clique em "Editar" ao lado do campo de e-mail e insira o novo endereço de e-mail. Certifique-se de confirmar as alterações clicando em "Salvar perfil" antes de sair.
              </div>
            </div>
          </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Criei uma nova conta. Posso transferir minhas playlists, músicas salvas e seguidores?
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Sim, é possível transferir suas playlists, músicas salvas e seguidores de uma conta antiga para uma nova. Para fazer isso, você precisará entrar em contato com o suporte ao cliente do Spotify e solicitar a transferência de dados. Este processo pode levar alguns dias para ser concluído.
                  </div>
            </div>
            </div>
            
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Como funciona a oferta Premium de 1 mês grátis?
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A oferta Premium de 1 mês grátis é uma promoção oferecida pelo Spotify para novos usuários que desejam experimentar o serviço Premium. Para aproveitar a oferta, basta criar uma nova conta no Spotify e selecionar a opção Premium durante o período de inscrição. Você poderá desfrutar de todos os recursos Premium do Spotify gratuitamente por um mês inteiro.
                  </div>
                </div>
            </div>
           
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Como solucionar problemas do Spotify no PlayStation?
                    </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Se você está tendo problemas para usar o Spotify no PlayStation, verifique se o aplicativo está atualizado para a versão mais recente. Certifique-se também de que sua conta do PlayStation Network esteja conectada à sua conta do Spotify. Se ainda estiver enfrentando problemas, tente reiniciar o PlayStation e o roteador de internet para resolver problemas de conexão.
                </div>
            </div>
            </div>
           
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    O que é sessão privada e como isso afeta minhas recomendações? 
                    </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"  data-bs-parent="#accordionExample">
                <div className="accordion-body">
                A sessão privada é uma opção disponível no Spotify que permite aos usuários ouvirem música sem que suas escolhas afetem suas recomendações de músicas. Quando a sessão privada está ativada, o Spotify não registra as músicas ouvidas pelo usuário, não atualiza as playlists do usuário com base em suas escolhas e não usa as inhtmlFormações de histórico de escuta do usuário para personalizar suas recomendações.
                </div>
            </div>
            </div>
            
        </div>      
    </div>   
    );
}

export default Ask