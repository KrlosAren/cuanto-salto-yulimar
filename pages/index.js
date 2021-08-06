import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Airfrayer from '../public/img/airfrayer.png';
import Simone from '../public/img/biles.png';
import Djovokic from '../public/img/djokovic.png';
import yulimarSalto from '../public/img/jumpYuli.png';
import Messi from '../public/img/messi.png';
import Naymar from '../public/img/neymar.png';
import Phells from '../public/img/phells.png';
import Rubik from '../public/img/rubik.png';
import Yulimar from '../public/img/yulimar.png';
import Loader from '../src/components/Loader';
import Rules from '../src/components/Rules/Rules';
import styles from '../src/styles/styles';

const selected = {
  atletas: [
    {
      id: 1,
      name: 'Leonel Messi',
      height: 1.7,
      image: Messi,
    },
    {
      id: 2,
      name: 'Simone Biles',
      height: 1.42,
      image: Simone,
    },
    {
      id: 3,
      name: 'Neymar Jr.',
      height: 1.75,
      image: Naymar,
    },
    {
      id: 4,
      name: 'Novak Djokovic',
      height: 1.88,
      image: Djovokic,
    },
    {
      id: 5,
      name: 'Yulimar Rojas',
      height: 1.93,
      image: Yulimar,
    },
    {
      id: 6,
      name: 'Michael Phelps',
      height: 1.89,
      image: Phells,
    },
  ],
  objetos: [
    {
      id: 7,
      name: 'Cubo Rubik',
      height: 0.05,
      image: Rubik,
    },
    {
      id: 8,
      name: 'Airfrayer',
      height: 0.27,
      image: Airfrayer,
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
  const [boxes, setBoxes] = useState(0);

  const COLUMNS = 12;
  const { atletas, objetos } = selected;

  const handleChange = (e) => {
    const value = Number(e.target.value);
    const filterValue = atletas.find((item) => item.id === value);
    const item = filterValue
      ? filterValue
      : objetos.find((item) => item.id === value);

    setOption(item);
  };

  useEffect(() => {
    const total = option !== undefined && RECORD / option.height;
    const gridNumber = Math.ceil(total);
    total && setTotal(total);
    setBoxes(gridNumber);
    const totalColumns = gridNumber > 12 ? COLUMNS : gridNumber;
    setGrid(totalColumns);
  }, [option]);

  useEffect(() => {
    const arr = Array.from(Array(boxes).keys());
    setNumberPhoto(arr);
  }, [boxes]);

  useEffect(() => {
    const format = total && total.toFixed(2);
    const porcentaje = String(format).split('.');
    const imgCrop = 100 - Number(porcentaje[1]);
    console.log({ porcentaje: imgCrop });
    setImg(`${imgCrop}%`);
  }, [total]);

  useEffect(() => {
    const lastItem = numberPhoto.length - 1;
    console.log({ lastItem });
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
          <div className='middle-screen'>
            <header>
              <div className='title-container'>
                <p>Juegos Olímpicos - Tokio 2020</p>
                <h1>Yulimar Rojas</h1>
              </div>
              <div
                className='box-line'
                style={{ backgroundColor: '#F3B23A' }}
              />
              <div
                className='box-line'
                style={{ backgroundColor: '#3A9AF3' }}
              />
              <div
                className='box-line'
                style={{ backgroundColor: '#F33A3A' }}
              />
              <div className='yulimar-img'>
                <Image
                  src={yulimarSalto}
                  alt='yulimar'
                  width={400}
                  height={400}
                  placeholder='empty'
                />
              </div>
              <div className='text-container'>
                <p>
                  Es la primera mujer venezolana en ganar un{' '}
                  <strong>oro olímpico</strong>. Alcanzó los{' '}
                  <strong>15,67</strong> metros, superando la marca olímpica de
                  la camerunesa Francoise Mbango de 15,39 m y el récord mundial
                  de 15,50 m que la ucraniana Inessa Kravets obtuvo en 1995.
                </p>
              </div>
              <div className='triple-salto'>
                <div className='triple-salto-header'>TRIPLE SALTO</div>
              </div>
              <div
                className='box-line-vinotinto'
                style={{ backgroundColor: '#8f302f' }}
              />
            </header>
          </div>
          <div className='footer-screen'>
            <p className='header-title'>Yulimar saltó el equivalente a...</p>
            <section>
              <select name='option' id='option' onChange={handleChange}>
                <option value=''>Selecciona Una</option>
                <optgroup label='Atletas'>
                  {atletas.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label='Objectos'>
                  {objetos.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </section>
            <div className='container-fixed'>
              <div className='img-container'>
                {option ? (
                  numberPhoto.map((i, index) => (
                    <div key={index} id={`${index}-img`} className='imagen-box'>
                      <Image
                        src={option.image}
                        alt={option.name}
                        placeholder='empty'
                      />
                    </div>
                  ))
                ) : (
                  <Loader />
                )}
              </div>
              <div className='initial'>0 m</div>
              <div className='rules'>
                <Rules />
              </div>
              <div className='end'>15.67 m</div>
            </div>
            <div className='total-container'>
              <div>
                <p>
                  <strong>{total ? total.toFixed(2) : '15.67 m'}</strong>
                </p>
                <p>{option ? option.name : 'Salto Yulimar'}</p>
              </div>
            </div>
          </div>

          <footer>
            <div>@ansilliano @krlosaren</div>
          </footer>
        </main>
      </div>

      <style jsx>{styles}</style>

      <style jsx>{`
        .img-container {
          grid-column: 2/-2;
          display: grid;
          gap: 1px;
          grid-template-columns: repeat(${gridColumns}, 1fr);
          grid-template-rows: auto;
          height: auto;
          margin-top: 40px;
          margin-bottom: 10px;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .img-crop {
          border-radius: 10px;
          clip-path: inset(0 ${img} 0 0);
        }

        .middle-screen {
          grid-column: 1/-1;
          grid-row: 1/2;
          position: relative;
        }

        .container-fixed {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          flex-direction: column;
          grid-column: 1/-1;
        }

        .footer-screen {
          grid-column: 1/-1;
          grid-row: 2/3;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
      `}</style>
    </>
  );
}
