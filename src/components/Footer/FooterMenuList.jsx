import React from 'react';
import "./FooterMenuList.css";

function FooterMenuList(props) {
  const { type } = props;

  console.log(props);
  let menuItems = ['Null']
  if(type==='colA'){
    menuItems = ['Empresa','Sobre', 'Empregos', 'For The Record']
  } else if(type==='colB'){
    menuItems = ['Comunidades','Para Artistas', 'Desenvolvedores', 'For the Record', 'Investidores', 'Fornecedores']
  } else if(type==='colC'){
    menuItems = ['Links Úteis', 'Suporte', 'Player da Web', 'Aplicativo móvel grátis']
  }


  return (
    <ul className="footer-menu">
      <p>{menuItems[0]}</p>
      {menuItems.slice(1).map((item, index) => (
        <li key={index} className="footer-menu-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default FooterMenuList;
