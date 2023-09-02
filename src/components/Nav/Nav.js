import NavButton from './NavButton';
import Hamburguer from './hamburguer';
import KN from './KN';

export function Nav() {
  return (
    <nav className="w-full h-20 bg-black border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
        <KN />
        <div className="hidden lg:flex flex items-center gap-4">
          <NavButton text={'Introdução'}></NavButton>

          <NavButton text={'O casal'}>Casasad</NavButton>

          <NavButton text={'Cerimônia e recepção'}>aDasdad</NavButton>

          <NavButton text={'Lista de presentes'}>aDasdad</NavButton>

          <NavButton text={'Confirmação da presença'}>aDasdad</NavButton>
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
