import './App.css';

function Header() {
  return (
    <div className="AppHeader">
      <header className="Header">

        <nav className='cabeca'>
          <div className='titulo'>
          <h1>APP DE TAREFAS</h1>
          </div>
          
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Tarefa">Tarefas</a>
            </li>


          </ul>

        </nav>


      </header>
    </div>
  );
}

export default Header;