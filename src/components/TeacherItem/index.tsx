import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/6616776?s=460&u=54d3797c346c059eb301dcedb73ac3dcdcfb4adc&v=4" alt="Lucas Alves Ferreira"/>
        <div>
          <strong>Lucas Alves</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lucas Faz quimica bem
        <br/><br/>
        HAAHHAHAHAHHAHA
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;