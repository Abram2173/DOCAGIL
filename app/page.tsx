export default function Home() {
  return (
    <main>
      <h1>¡Bienvenido a DOCAGIL por Abram! 🚀</h1>
      <p>Mi app personalizada, creada el {new Date().toLocaleDateString()}</p>
      <p>Hora actual: {new Date().toLocaleTimeString()}</p>
    </main>
  );
}