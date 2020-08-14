import React, { useState } from 'react';
//Aki estou IMPORTANDO AQUELE COMPONENTE QUE VAI NOS SERVIR AKI TAMBÉM
//Estamos REUTILIZANDO CÓDIGO
import PageHeader from '../../components/PageHeader';

//Importando o INPUT
import Input from '../../components/Input';

//Vamos IMPORTAR a imagem de AVISO IMPORTANTE
import warningIcon from '../../assets/images/icons/warning.svg';

//Vamos IMPORTAR o TEXTAREA
import Textarea from '../../components/Textarea';

//IMPORTANDO o SELECT
import Select from '../../components/Select';

//IMPORTANDO o CSS
import './styles.css';

function TeacherForm() {
  const [scheduleItems] = useState([
    { week_day: 0, from: '8:00 AM', to: '4:00 PM' },
    { week_day: 2, from: '10:00 AM', to: '6:00 PM' }
  ]);//Dentro do useState passo o VALOR INICIAL da scheduleItems


  function addNewScheduleItem() {
    scheduleItems.push({
      week_day: 0,
      from: '',
      to: '',
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo, é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}> + Novo horário</button>
          </legend>

          {scheduleItems.map(scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
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

                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />

              </div>
            );
          })}

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Prencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>

      </main>
    </div>
  )
}

export default TeacherForm;