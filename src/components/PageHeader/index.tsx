import React from 'react';
import { Link } from 'react-router-dom';
//OBS: abaixo temos o [className="container"] que está herdando estilos(CSS)

//Vamos IMPORTAR o ICONE DE VOLTAR (voltar para a página anterior)
//E iremos importar a LOGO também
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

//Importando o CSS
import './styles.css';

//Propriedades do meu PAGE-HEADER
interface PageHeaderProps {
  //Estou dizendo que irá ter "title" que é do tipo STRING e é OBRIGATÓRIA
  //Dai a PROPRIEDADE do componente poderá ser "TITLE"
  //PARÂMETRO <> no TYPESCRIPT chamamos de GENERIC
  //Tenho um COMPONENTE chamado "pageHeader" ele é um FUNCTION COMPONENT
  //e as PROPRIEDADES que ele tem é "<PageHeaderProps>"
  //(props) estou me REFERINDO ao "TITLE" o mesmo que está aki embaixo
  title: string;
  description?: string; //?:  Significa que a "PROPRIEDADE É OPCIONAL", então...
  //ALGUMAS PÁGINAS TERÃO COMO PROPRIEDADE DESCRIPTION E OUTRAS NÃO
  //Ou seja o title: string; | eu tenho em um página e ela fica OBRIGÁTORIA para todas as páginas
  //Agora o "DESCRIPTION" NÃO, Ele FICARÁ DISPONIVEL SOMENTE NAS PÁGINAS QUE TIVEREM A PROPRIEDADE
  //"DESCRIPTION"
}

//React.FC  COMPONENTE ESCRITO EM FORMATO DE FUNÇÃO
const pageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header" >
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}



        {props.children}
      </div>
    </header >
  );
}

export default pageHeader;