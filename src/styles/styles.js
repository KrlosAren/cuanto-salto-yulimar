import css from 'styled-jsx/css';

export default css`
  main {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .text-container {
    height: 200px;
    grid-column: 7/-2;
    text-align: right;
    line-height: 2rem;
    display: flex;
    align-items: center;
  }

  .title-container {
    grid-column: 1/-2;
    padding-top: 10px;
    padding-right: 40px;
  }
  .title-container > p {
    margin: 0;
    color: #29140f;
    text-align: right;
    text-decoration: underline;
    grid-column: 1/-1;
  }

  .title-container > h1 {
    font-weight: 400;
    font-size: 60px;
    color: #29140f;
    text-align: right;
    grid-column: 1/-1;
    margin: 0;
  }

  .box-line {
    height: 2px;
    width: 100%;
    margin-top: 4px;
    grid-column: 1/-1;
  }
  .box-line-vinotinto {
    height: 6px;
    width: 100%;
    margin-top: 8px;
    grid-column: 1/-1;
  }

  article {
    position: relative;
    background-color: #8f302f;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  article > p {
    margin: 0;
    padding: 0;
    font-size: 100px;
    font-weight: 700;
    margin-right: 45px;
    color: #ffffff;
  }

  .triple-salto {
    background-color: #8f302f;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0;
    padding: 0;
    font-size: 100px;
    font-weight: 700;
    color: #ffffff;
    background-color: #8f302f;
    grid-column: 1/-1;
    text-align: right;
    position: relative;
  }

  .triple-salto-header {
    grid-column: 1/-2;
    margin: 0;
  }

  .line-vinotinto {
    width: 100%;
    grid-column: 1/-1;
    background-color: red;
    height: 4px;
  }
  article > p:before {
    content: '';
  }

  section {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30px;
    margin: 0 auto;
  }

  .rules {
    margin: 0 auto;
    grid-column: 2/-2;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  a {
    margin-right: 10px;
  }

  .imagen-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .total-container {
    grid-column: 1/-1;
    justify-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50%;
  }

  .total-container > div {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #29140f;
    width: 100%;
    height: 40px;
    background-color: #efdedd;
    border-radius: 5px;
  }

  .yulimar-img {
    left: 40px;
    top: 40px;
    position: absolute;
    z-index: 10;
  }

  select {
    width: 30%;
  }

  .total-container > div > p {
    padding: 0 10px;
    margin: 0;
  }

  .initial {
    grid-column: 1/2;
  }

  .end {
    grid-column: -2/-1;
  }

  .initial,
  .end {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-title {
    width: 100%;
    align-items: center;
    text-align: center;
    grid-column: 1/-1;
  }
  footer {
    width: 100%;
    height: 40px;
    grid-column: 1/-1;
    padding: 10px;
    color: #ffff;
    background-color: #29140f;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  @media (max-width: 720px) {
    .yulimar-img {
      grid-column: 1/-1;
      position: initial;
      max-width: 100%;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }

    .title-container {
      padding: 20px;
      grid-column: 1/-1;
    }
    .text-container {
      grid-column: 1/-1;
      padding: 20px;
      text-align: center;
      height: auto;
      margin: 0;
    }

    .triple-salto {
      padding: none;
    }

    select {
      width: 90%;
    }

    .triple-salto-header {
      margin: 0;
      text-align: center;
      font-size: 40px;
      grid-column: 1/-1;
    }

    .total-container {
      width: 90%;
    }

    .container-fixed {
      width: 90%;
      margin: 0 auto;
    }
    .rules {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }

    .rules div {
      font-size: 14px;
    }

    .initial,
    .end {
      display: none;
    }

    footer {
      height: auto;
    }
  }
`;
