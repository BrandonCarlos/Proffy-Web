import React, { SelectHTMLAttributes } from 'react';
//Vamos REUTILIZAR CÓDIGO dos INPUTS
//GENERIC <> = "PARÂMETRO DE TIPAGEM" falando QUAIS SÃO AS PROPRIEDADES(InputProps) que MEU INPUT
//VAI PODER RECEBER, é dessa FORMA aqui que se DEFINI um COMPONENTE com as "PROPRIEDADES TIPADAS"

import './styles.css';

//Um INPUT PODE RECEBER DIVERSAS PROPRIEDADES, tem um jeito de falarmos para o REACT fazer isso
//fazer com que um INPUT POSSA RECEBER QUALQUER PROPRIEDADE EXISTENTE COM O { InputHTMLAttributes }
//Só que { inputHTMLAttributes } precisa de um GENERIC <> "UMA VÁRIAVEL GLOBAL" chamada <HTMLInputElement>
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {

  //Lá no htmlFor="subject" é outra COISA QUE PRECISAMOS MUDAR
  name: string;

  label: string;//Como aqui não tem o ?: ISSO SIGNIFICA QUE a PROPRIEDADE É OBRIGATÓRIA
  //Portanto "LABEL" É OBRIGATÓRIO

  //Options = É um ARRAY de MATÉRIAS, e precisamos "INFORMAR O FORMATO DOS ITENS DO ARRAY"
  //Informando que é do TIPO "OBJETO" e "value" e "label" são do tipo "STRING"
  options: Array<{
    value: string;
    label: string;
  }>;


}

//(props) = EU RECEBO TODAS AS PROPRIEDADES ex: label, nome, senha
//Se eu quiser receber PROPRIEDADE POR PROPRIEDADE eu posso usar a DESESTRUTURAÇÃO ({ label })
//({ label }) que no CASO É A PROPRIEDADE ACIMA MESMO = label: string;
//OPERADOR: "SPREAD OPERATOR" = (...) Ele pega todas as PROPRIEDADES que SOBRAREM que não são a "LABEL" NEM O "NAME"
//E vamos colocar dentro de um objeto chamado = REST
//OBS: agora esse ...rest está com todas as propriedades que o INPUT PODE RECEBER
//Vou usar todos os ATRIBUTOS PARA MEU INPUT

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  //O QUE MUDA DE UM INPUT PARA O OUTRO?
  //1° o TEXTO = "Matéria"

  //Dentro do "SELECT" Existe uma ESTRUTURA DE REPETIÇÃO
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...rest}>

        <option value="" disabled hidden>Selecione uma opção</option>

        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>//Aki dentro do <option>
          //É OBRIGATÓRIO o uso da PROPRIEDADE  key=""
          //Somente no 1° ELEMENTO dentro do MAP
          //Precisamos por uma INFORMAÇÃO unica de todas as OPTIONS que tem aki
          //Qual OPÇÃO DE TODAS É UNICA? no caso pode ser o "value" ou "label", no caso vão ser os DOIS
          //Mais iremos colocar o "value" porque ele tem mais CARA DE SER ÚNICO
          //Normalmente colocamos o ID do usuário, CPF
          //Isso ajuda o REACT e IDENTIFICAR OS ELEMENTOS EM TELA na hora que ele precisar MODIFICAR 
          //cada um deles
          //Vamos por uma OPÇÃO NO SELECT "OPÇÃO PADRÃO"
          //OBS: Não quero que apareça uma matéria... quero que apareça "Selecione uma opção"


          //1° INPUT ACIMA value="" começa VAZIO
          //disabled = o texto = "Selecione uma opção" não será SELECIONÁVEL
          //hidden = SIGNIFICA que o texto "Selecione uma opção" não estará na lista para SELECIONAR
        })}
      </select>
    </div>
  );
}

export default Select;