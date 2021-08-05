import styles from './styles';

const Loader = () => {
  return (
    <>
      <div className='lds-circle'>
        <div></div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Loader;
