function LoginForm() {
  const [formData, setFormData] = React.useState({
    usuario: "",
    contraseña: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Bienvenido, " + formData.usuario + "!");
  };

  return (
    <div
      className="
        flex flex-col md:flex-row justify-between items-center
        bg-[#F5F5F5] min-h-screen
      "
    >
      <div
        className="
          relative flex flex-col justify-center items-start
          px-6 md:px-10 w-full md:w-[850px] h-[600px] md:h-[821px]
        "
      >
        <img
          src="imagenes/usuario/usuario.png"
          alt="Fondo"
          className="absolute inset-0 object-cover w-full h-full"
          style={{ zIndex: 0 }}
        />

        <div
          className="
            relative z-10 w-full max-w-md p-6 md:p-10
            bg-transparent md:shadow-4xl mx-auto md:ml-16
          "
        >
          <h2 className="text-[#EADBC8] text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            TOP CLOTHES
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white text-lg md:text-xl font-bold mb-2 block">
                Usuario
              </label>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:ring-4 focus:ring-[#C5A04A] outline-none"
              />
            </div>

            <div>
              <label className="text-white text-lg md:text-xl font-bold mb-2 block">
                Contraseña
              </label>
              <input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:ring-4 focus:ring-[#C5A04A] outline-none"
              />
            </div>

            <a href="#" className="block text-[#EADBC8] text-sm hover:underline">
              ¿Olvidaste la contraseña?
            </a>

            <div className="flex gap-4">
              <button
                type="button"
                className="w-1/2 bg-[#C5A04A] text-white font-bold py-3 hover:bg-white hover:text-black transition duration-300"
              >
                Iniciar Sesión
              </button>
              <button
                type="submit"
                className="w-1/2 bg-[#C5A04A] text-white font-bold py-3 hover:bg-white hover:text-black transition duration-300"
              >
                Crear Cuenta
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 md:mt-0 mr-0 md:mr-10">
        <img
          src="imagenes/usuario/usuario2.png"
          alt="Imagen derecha"
          className="w-[90%] md:w-[900px] h-auto md:h-[600px] object-contain"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("login-content"));
