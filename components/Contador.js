const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);
  const reset = () => setContador(0);

  const evaluar = (numero) => {
    if (numero == 0) {
      return "cero";
    } else if (numero < 0) {
      return "menor";
    }
    return "mayor";
  };

  return (
    <div>
      <h1 className={evaluar(contador)}>Contador: {contador}</h1>
      <hr />
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={reset}>Reiniciar</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
};
