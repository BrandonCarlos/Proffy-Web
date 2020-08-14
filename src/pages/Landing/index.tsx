import React from 'react';

//OBS: quando clicamos no botão "ESTUDAR" a página não pode carregar tem que ir de IMEDIATO para
//a outra PÁGINA então vamos resolver isso IMPORTANDO ...
//Iremos SUBSTITUIR O <a></a> pelo <Link></Link>
//e TROCAMOS O "href=""" por [to=""]
//Para que já não haja esse CARREGAMENTO DE PÁGINA
import { Link } from 'react-router-dom';


//Precisamos IMPORTAR a imagem
//"logoImg" passa a ser uma VÁRIAVEL que podemos usa-la
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

//Importando ICONES
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//IMPORTANDO O CSS 
import './styles.css';

function Landing() {
  return (
    //Quando é muito contéudo que irá RETORNAR precisamos por parênteses ()
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />


        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexôes já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing;