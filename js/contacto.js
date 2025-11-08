function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    pais: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Gracias por contactarnos, " + formData.name + "!");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-start justify-center p-6">
      <div className="container mx-auto">
        <h2 className="text-[#3F3833] text-4xl font-bold text-center mb-10">
          ¿NECESITAS ALGO MÁS? CONTACTANOS
        </h2>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="md:w-1/2 bg-[#4F4D4B] rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-white text-2xl font-bold mb-2 block">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-4 focus:ring-black-400 outline-none bg-white"
                />
              </div>

              <div>
                <label className="text-white text-2xl font-bold mb-2 block">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-4 focus:ring-black-400 outline-none bg-white"
                />
              </div>

              <div>
                <label className="text-white text-2xl font-bold mb-2 block">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-4 focus:ring-black-400 outline-none resize-none bg-white"
                ></textarea>
              </div>

              <div>
                <label className="text-white text-2xl font-bold mb-2 block">
                  Distrito
                </label>
                <select
                  name="pais"
                  value={formData.pais}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-4 outline-none bg-white"
                >
                  <option value="">Seleccionar distrito</option>
                  <option value="Molina">Molina</option>
                  <option value="Ate">Ate</option>
                  <option value="Santa Anita">Santa Anita</option>
                  <option value="La Victoria">La Victoria</option>
                  <option value="Miraflores">Miraflores</option>
                  <option value="San Isidro">San Isidro</option>

                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFFFFF] text-black font-bold py-3 rounded-lg hover:bg-[#C5A04A] transition duration-300"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="bg-[#4F4D4B] rounded-xl shadow-lg p-4">
              <h3 className="text-xl font-bold mb-4 text-center text-white">
                UBICACIÓN
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.7481918467324!2d-76.95762296509433!3d-12.070223700588075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6f0bb29dacb%3A0xcc82b709d4c77f37!2sN%C2%B0%201068%2C%20LM-119%20N%C2%B0%201068%2C%20La%20Molina%2015012!5e0!3m2!1ses!2spe!4v1762560286113!5m2!1ses!2spe"           
                  style={{ border: 0 }}
                  allowFullScreen=""
                  width="600"
                  height="300"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="mt-6 text-center">
  <h4 className="text-lg font-medium text-gray-900 mb-3">
  SIGUENOS Y ESCRIBENOS EN NUESTRAS REDES SOCIALES
  </h4>
  <div className="flex justify-center space-x-6">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="imagenes/redes/facebook.webp"
        alt="Facebook"
        className="w-10 h-10"
      />
    </a>

    <a
      href="https://www.twitter.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="imagenes/redes/twiter.png"
        alt="Twitter"
        className="w-10 h-10"
      />
    </a>

    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="imagenes/redes/instagram.avif"
        alt="Instagram"
        className="w-10 h-10"
      />
    </a>

    <a
      href="https://www.tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
  
    >
      <img
        src="imagenes/redes/descarga.png"
        alt="TikTok"
        className="w-10 h-10"
      />
    </a>
    <a
      href="https://www.whatsApp.com"
      target="_blank"
      rel="noopener noreferrer"
  
    >
      <img
        src="imagenes/redes/whasapp.jpeg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  </div>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-3">
    En nuestars redes sociales te mantendremos informado de 
    nuestras promociones
    moda del momento y
    sobre todo de descuentos exclusivos.
  </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<ContactForm />, document.getElementById("contact-content"));
