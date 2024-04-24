# Teste técnico frontend - Agrotis

![Formulario](https://github.com/LeonSuckow/agrotis-test/blob/main/src/assets/print_form.png?raw=true)

![Formulario](https://github.com/LeonSuckow/agrotis-test/blob/main/src/assets/print_form_invalid.png?raw=true)

1. **Requisitos**

- Desenvolver com React;
- Construção do formulário funcional;
- Seguir com fidelidade o protótipo;
- Dar um console.log dos dados de envio;
- Usar MATERIAL-UI para componentes default (ícones/inputs/frames);
- Consumir os endpoint abaixo para popular os inputs de select;
- Envio do formulário deve ter o seguinte formato

```bash
{
    nome: 'Jon doe',
    dataInicial: '2022-02-02T17:41:44Z',
    dataFinal: '2022-02-02T17:41:44Z',
    infosPropriedade: {
    id: 1,
    nome: 'Fazenda Agrotis'
    },
    cnpj: '79.200.214/0001-61',
    laboratorio: {
    id: 3,
    nome: 'Osborne Agro'
    },
    observacoes: 'Observacao exemplo de teste'
}

```

2. **Items Opcionais**

- Usar styled-componts
- Usar uma lib de formulário (react-hook-form por exemplo);
- Utilizar hooks;
- Typescript;

# Instalação

1. **Clonar Repositório e Rodar o projeto**
   ```bash
       git clone https://github.com/LeonSuckow/agrotis-test.git
       cd agrotis-test
       npm install
       npm run dev
   ```

#Ferramentas utilizadas

- React + Vite
- Material UI
- react-hook-form-mui - React-Hook-Form integrado ao Material UI
- Styled-componentes
- Axios
- React-Query
