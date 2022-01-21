import spinner from './200.gif';
const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Efile eje ko fetch</h1>
    </div>
  );
};

export default Loader;
