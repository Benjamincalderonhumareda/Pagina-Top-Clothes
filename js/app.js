function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#3F3833] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between relative">
         <div
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl cursor-pointer hover:text-orange-400 transition-colors duration-200"
        >
          ☰
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
          TOP CLOTHES
        </h1>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#3F3833] md:bg-transparent md:space-x-8 text-center md:text-left z-40 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center py-4 md:py-0">
            <li>
              <a
                href="index.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="ropa.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                ROPA
              </a>
            </li>
            <li>
              <a
                href="calzado.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                CALZADO
              </a>
            </li>
            <li>
              <a
                href="accesorios.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                ACCESORIOS
              </a>
            </li>
            <li>
              <a
                href="contacto.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                CONTACTO
              </a>
            </li>
            <li>
              <a
                href="usuario.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                USUARIO
              </a>
            </li>


            <li>
              <a
                href="carrito.html"
                className="text-white text-2xl hover:text-orange-400 font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                🛒
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

ReactDOM.createRoot(document.getElementById("header")).render(<Header />);
