function Carrito() {
  const [carrito, setCarrito] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(data);
  }, []);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => {
      const precio = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return total + (isNaN(precio) ? 0 : precio);
    }, 0);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Tu Carrito de Compras
      </h1>

      {carrito.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">
          No tienes productos en el carrito.
        </p>
      ) : (
        <div className="space-y-6">
          {carrito.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => eliminarDelCarrito(index)}
                className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200"
              >
                Quitar
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center bg-gray-100 p-5 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold">Total a pagar:</h2>
            <p className="text-3xl font-bold text-green-600">
              S/ {calcularTotal().toFixed(2)}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={vaciarCarrito}
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-medium transition-all duration-200"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("carrito"));
root.render(<Carrito />);
