import React, {Component} from 'react';
import {BemVindo, Container, Head, Titulo} from './styles';

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto</Titulo>
      </Head>
      <BemVindo cor="000000" tamanho={35}>
        Bem Vindo
      </BemVindo>
    </Container>
  );
}

export default App;
