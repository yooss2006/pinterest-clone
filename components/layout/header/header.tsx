import { NavLink } from "./nav-link";
import { NavButtonList } from "./nav-button-list";
import { NavPopover } from "./nav-popover";

const navLinkList = [
  { href: "/", icon: "/icon/home.svg", label: "홈" },
  { href: "/pin-creation-tool", icon: "/icon/create.svg", label: "만들기" },
];

export function Header() {
  return (
    <header className="w-18 h-full flex flex-col justify-between py-4 px-1 text-center border-r">
      <h1 className="mb-6">
        <NavLink
          href="/"
          icon="/icon/logo.svg"
          label="홈"
          isCheckable={false}
        />
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
