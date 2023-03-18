import React from 'react';
import "./FooterMenuList.css";

function FooterMenuList(props) {
  const { type } = props;

  const menuItemsMap = {
    colA: ['Empresa', 'Sobre', 'Empregos', 'For The Record'],
    colB: ['Comunidades', 'Para Artistas', 'Desenvolvedores', 'For the Record', 'Investidores', 'Fornecedores'],
    colC: ['Links Úteis', 'Suporte', 'Player da Web', 'Aplicativo móvel grátis']
  }
  const menuItems = menuItemsMap[type] || ['Null'];


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
