import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import Hamburguer from './hamburguer';
import KN from './KN';

export function Nav() {
  return (
    <nav className="w-full h-20 bg-black border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <KN />
        <div className="hidden lg:flex flex items-center gap-4">
          <Link to="/dashboard">
            <NavButton text={'Introdução'}></NavButton>
          </Link>

          <Link to="/dashboard">
            <NavButton text={'O casal'}>Casasad</NavButton>
          </Link>
          <Link to="/dashboard">
            <NavButton text={'Cerimônia e recepção'}>aDasdad</NavButton>
          </Link>
          <Link to="/dashboard">
            <NavButton text={'Lista de presentes'}>aDasdad</NavButton>
          </Link>
          <Link to="/dashboard">
            <NavButton text={'Confirmação da presença'}>aDasdad</NavButton>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button>
            <Hamburguer />
          </button>
        </div>
      </div>
    </nav>
  );
}
