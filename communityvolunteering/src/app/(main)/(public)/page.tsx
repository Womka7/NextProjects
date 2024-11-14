export default function Home() {
  return (
    <>
      <header className="w-full h-20 bg-transparent z-50 flex px-8">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <h2 className="text-xl text-blue-600 font-semibold">VolunteerConnect</h2>
          </div>

          <nav className=" sm:flex h-full items-center">
            <ul className="flex items-center gap-10 text-lg">
              <li><a href="/login"><button className="hover:"> Iniciar sesión</button></a></li>
              <li><a href="/register"><button className="bg-black text-white px-4 py-2 rounded-md">Registrarse</button></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center pb-8">
        <div className="w-full max-w-[860px] px-8 mx-auto flex flex-col gap-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Conecta, Colabora, Cambia el Mundo
          </h1>
          <p className="text-base sm:text-lg text-black font-light">
            Únete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad.
          </p>

          <div className="w-full flex flex-wrap justify-center gap-5">
            <div>
              <button className="bg-black text-white w-full h-[50px] text-lg rounded-md flex items-center justify-center gap-4 px-5">Explorar Proyectos</button>
            </div>
            <div>
              <button className="bg-white text-black border border-gray-300 w-full h-[50px] text-lg rounded-md flex items-center justify-center gap-4 px-5">Comenzar como Organizador</button>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
