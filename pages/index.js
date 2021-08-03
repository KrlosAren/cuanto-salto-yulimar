import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Djovokic from '../public/img/djokovik.svg';
import Messi from '../public/img/messi.svg';
import Phells from '../public/img/phellls.svg';
import Simone from '../public/img/simone.svg';
import Yulimar from '../public/img/yulimar.svg';

const selected = {
  atletas: [
    {
      id: 1,
      name: 'leonel messi',
      height: 1.7,
      image: Messi,
    },
    {
      id: 2,
      name: 'simone biles',
      height: 1.42,
      image: Simone,
    },
    {
      id: 3,
      name: 'neymar',
      height: 1.75,
      image: Yulimar,
    },
    {
      id: 4,
      name: 'djokovic',
      height: 1.88,
      image: Djovokic,
    },
    {
      id: 5,
      name: 'yulimar',
      height: 1.93,
      image: Yulimar,
    },
    {
      id: 6,
      name: 'Phells',
      height: 1.89,
      image: Phells,
    },
  ],
};

export default function Home() {
  const RECORD = 15.67;

  const [option, setOption] = useState();
  const [total, setTotal] = useState();
  const [gridColumns, setGrid] = useState();
  const [img, setImg] = useState('100%');
  const [numberPhoto, setNumberPhoto] = useState([]);

  const { atletas } = selected;

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filterValue = atletas.find(
      (item) => item.name.toLowerCase() === value
    );

    setOption(filterValue);
  };
  useEffect(() => {
    const total = option !== undefined && RECORD / option.height;
    const gridColumns = Math.ceil(total);
    total && setTotal(total);
    setGrid(gridColumns);
  }, [option]);

  useEffect(() => {
    const arr = Array.from(Array(gridColumns).keys());
    setNumberPhoto(arr);
  }, [gridColumns]);

  useEffect(() => {
    const format = total && total.toFixed(2);
    const porcentaje = String(format).split('.');
    const imgCrop = 100 - Number(porcentaje[1]);
    setImg(`${imgCrop}%`);
  }, [total]);

  useEffect(() => {
    const lastItem = numberPhoto.length - 1;
    const element = document.getElementById(`${lastItem}-img`);
    if (element) {
      element.classList.add('img-crop');
    }
  }, [numberPhoto]);

  //   <h1>
  //   Cuanto Salto Yulimar Rojas : {total ? total.toFixed(2) : 15.67} -{' '}
  //   {option ? `${option.name}s` : 'm'}
  // </h1>

  return (
    <>
      <div>
        <Head>
          <title>Cuanto Salto Yulimar</title>
          <meta
            name='description'
            content='Webpage para conocer cuanto salto Yulimar Rojas en los juegos olimpicos de Tokio 2020'
          />
        </Head>

        <main>
          <header>
            <p>Juegos Olímpicos - Tokio 2020</p>
            <h1>Yulimar Rojas</h1>
          </header>
          <div className='box-line' style={{ backgroundColor: '#F3B23A' }} />
          <div className='box-line' style={{ backgroundColor: '#3A9AF3' }} />
          <div className='box-line' style={{ backgroundColor: '#F33A3A' }} />
          <article>
            <p>TRIPLE SALTO</p>
          </article>
          <section>
            <p>Yulimar saltó el equivalente a...</p>
            <input type='text' list='data' onChange={handleChange} />
            <datalist id='data'>
              {atletas.map((item) => (
                <option key={item.id} value={item.name} />
              ))}
            </datalist>
          </section>
          <div className='img-container'>
            {option &&
              numberPhoto.map((i, index) => (
                <div key={index} id={`${index}-img`} className=''>
                  <Image src={option.image} alt={option.name} />
                </div>
              ))}
          </div>
          <div className='total-container'>
            <div>
              <p>
                <strong>{total ? total.toFixed(2) : '15.67 m'}</strong>
              </p>
              <p>{option ? option.name : 'Salto Yulimar'}</p>
            </div>
          </div>
          <footer>
            <div>Diseñado y desarrollado por @ansilliano @krlosaren</div>
            <div>¿¿RRSS de Yulimar acá??</div>
          </footer>
        </main>
      </div>

      <style jsx>{`
        main {
          width: 100%;
          height: auto;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }

        header {
          grid-column: 1/-1;
          grid-row: 1/2;
          width: 100%;
          padding: 10px 18px;
          height: 120px;
        }

        header > p {
          margin: 0;
          color: #29140f;
          text-align: right;
          text-decoration: underline;
        }

        header > h1 {
          margin: 0;
          font-weight: 400;
          font-size: 60px;
          color: #29140f;
          text-align: right;
        }

        .box-line {
          grid-column: 1/-1;
          height: 2px;
        }

        article {
          grid-column: 1/-1;
          height: 100%;
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

        section {
          grid-column: 1/-1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        section > p {
          color: #29140f;
          font-size: 30px;
          font-weight: 400;
        }

        .img-container {
          width: 100%;
          display: grid;
          grid-column: 2/-2;
          grid-template-columns: repeat(${gridColumns}, 1fr);
          gap: 20px;
          min-height: 200px;
          height: 100%;
        }

        .img-crop {
          border-radius: 10px;
          clip-path: inset(0 ${img} 0 0);
        }

        .total-container {
          grid-column: 5/-6;
          margin-top: 10px;
          margin-bottom: 10px;
        }

        .total-container > div {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #29140f;
          width: 500px;
          height: 40px;
          background-color: #efdedd;
          border-radius: 5px;
        }

        .total-container > div > p {
          padding: 0 10px;
          margin: 0;
        }

        footer {
          width: 100%;
          height: 40px;
          grid-column: 1/-1;
          padding: 10px;
          color: #ffff;
          background-color: #29140f;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
}
