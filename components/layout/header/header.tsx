import { NavButtonList } from './nav-button-list';
import { NavLink } from './nav-link';
import { NavPopover } from './nav-popover';

const navLinkList = [
  { href: '/', icon: '/icon/home.svg', label: '홈' },
  { href: '/pin-creation-tool', icon: '/icon/create.svg', label: '만들기' }
];

export function Header() {
  return (
    <header className="flex h-full w-18 flex-col justify-between border-r px-1 py-4 text-center">
      <h1 className="mb-6">
        <NavLink href="/" icon="/icon/logo.svg" label="홈" isCheckable={false} />
      </h1>
      <nav className="mb-6">
        <ul className="flex flex-col gap-6">
          {navLinkList.map((item, index) => (
            <li key={index}>
              <NavLink {...item} />
            </li>
          ))}
        </ul>
      </nav>
      <NavButtonList />
      <NavPopover />
    </header>
  );
}
