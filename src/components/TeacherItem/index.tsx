import React from 'react';
//RE-IMPORTANDO A IMAGEM DO WHATSAPP
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (

    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/62078399?s=460&u=336a4029737e4025488eb3e39dbe62eddaef6f85&v=4" alt="Brandon Carlos" />
        <div>
          <strong>Brandon Carlos</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas atráves de experiências. Mais de 200.000
            pessoas já passaram por uma das minhas explosôes.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>

      </footer>

    </article>
  );
}

export default TeacherItem;