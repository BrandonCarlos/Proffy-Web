import React from 'react';
//IMPORTANDO O "pageHeader" que é o COMPONENTE que vamos usar para duas páginas
//Ou seja UM COMPONENTE que vai servir para 2 páginas(CÓPIA)
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

//Importando o INPUT
import Input from '../../components/Input';

//IMPORTANDO O SELECT
import Select from '../../components/Select';

//Vamos IMPORTAR o ICONE do WHATSAPP
//import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

//import { Link } from 'react-router-dom';
//OBS: abaixo temos o [className="container"] que está herdando estilos(CSS)

//Vamos IMPORTAR o ICONE DE VOLTAR (voltar para a página anterior)
//E iremos importar a LOGO também
//import logoImg from '../../assets/images/logo.svg';
//import backIcon from '../../assets/images/icons/back.svg';

//Vamos IMPORTAR O CSS aki dentro deste COMPONENTE
import './styles.css';


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <Select //Coloquei o "options" aki pois é aqui que terá as OPÇÔES
            name="subject"
            label="Matéria"
            options={[
              //Value é o Proprio VALUE DO INPUT
              //Label = É O VALOR DO INPUT
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação fisica', label: 'Educação fisica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Quimica', label: 'Quimica' },
            ]}
          />

          <Select //Coloquei o "options" aki pois é aqui que terá as OPÇÔES
            name="week_day"
            label="Dia da semana"
            options={[
              //Value é o Proprio VALUE DO INPUT
              //Label = É O VALOR DO INPUT
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feita' },
              { value: '6', label: 'Sábado' },

            ]}
          />

          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;