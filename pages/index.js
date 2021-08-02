import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Yulimar from '../public/img/yulimar.jpg';

const selected = {
  atletas: [
    {
      id: 1,
      name: 'leonel messi',
      height: 1.7,
      image: Yulimar,
    },
    {
      id: 2,
      name: 'simone biles',
      height: 1.42,
      image: Yulimar,
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
      image: Yulimar,
    },
    {
      id: 5,
      name: 'yulimar',
      height: 1.93,
      image: Yulimar,
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
          <h1>
            Cuanto Salto Yulimar Rojas : {total ? total.toFixed(2) : 15.67} -{' '}
            {option ? `${option.name}s` : 'm'}
          </h1>
          <div className='img-container'>
            {option &&
              numberPhoto.map((i, index) => (
                <div key={index} id={`${index}-img`}>
                  <Image src={option.image} alt={option.name} />
                </div>
              ))}
          </div>
          <p>Record Olimpico y Mundial</p> <h3>15.67m</h3>
          <input type='text' list='data' onChange={handleChange} />
          <datalist id='data'>
            {atletas.map((item) => (
              <option key={item.id} value={item.name} />
            ))}
          </datalist>
        </main>
      </div>

      <style jsx>{`
        .img-container {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(${gridColumns}, 1fr);
        }

        .img-crop {
          border-radius: 10px;
          clip-path: inset(0 ${img} 0 0);
        }
      `}</style>

      <style jsx global>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 45%;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
          margin-left: 0.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
