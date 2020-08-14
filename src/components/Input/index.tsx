import React, { InputHTMLAttributes } from 'react';
//Vamos REUTILIZAR CÓDIGO dos INPUTS
//GENERIC <> = "PARÂMETRO DE TIPAGEM" falando QUAIS SÃO AS PROPRIEDADES(InputProps) que MEU INPUT
//VAI PODER RECEBER, é dessa FORMA aqui que se DEFINI um COMPONENTE com as "PROPRIEDADES TIPADAS"

import './styles.css';

//Um INPUT PODE RECEBER DIVERSAS PROPRIEDADES, tem um jeito de falarmos para o REACT fazer isso
//fazer com que um INPUT POSSA RECEBER QUALQUER PROPRIEDADE EXISTENTE COM O { InputHTMLAttributes }
//Só que { inputHTMLAttributes } precisa de um GENERIC <> "UMA VÁRIAVEL GLOBAL" chamada <HTMLInputElement>
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

  //Lá no htmlFor="subject" é outra COISA QUE PRECISAMOS MUDAR
  name: string;

  label: string;//Como aqui não tem o ?: ISSO SIGNIFICA QUE a PROPRIEDADE É OBRIGATÓRIA
  //Portanto "LABEL" É OBRIGATÓRIO


}

//(props) = EU RECEBO TODAS AS PROPRIEDADES ex: label, nome, senha
//Se eu quiser receber PROPRIEDADE POR PROPRIEDADE eu posso usar a DESESTRUTURAÇÃO ({ label })
//({ label }) que no CASO É A PROPRIEDADE ACIMA MESMO = label: string;
//OPERADOR: "SPREAD OPERATOR" = (...) Ele pega todas as PROPRIEDADES que SOBRAREM que não são a "LABEL" NEM O "NAME"
//E vamos colocar dentro de um objeto chamado = REST
//OBS: agora esse ...rest está com todas as propriedades que o INPUT PODE RECEBER
//Vou usar todos os ATRIBUTOS PARA MEU INPUT

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  //O QUE MUDA DE UM INPUT PARA O OUTRO?
  //1° o TEXTO = "Matéria"
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;