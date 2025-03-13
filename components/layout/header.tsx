import { NavButton } from "@/components/layout/nav/nav-button";
import { NavLink } from "@/components/layout/nav/nav-link";

const navItems = [
  { href: "/", icon: "/icon/home.svg", label: "홈" },
  { href: "/pin-creation-tool", icon: "/icon/create.svg", label: "만들기" },
  { icon: "/icon/update.svg", label: "업데이트" },
  { icon: "/icon/message.svg", label: "메시지" },
];

export function Header() {
  return (
    <header className="w-18 h-full flex flex-col justify-between py-4 px-1 text-center border-r">
      <div>
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
            {navItems.map((item, index) => (
              <li key={index}>
                {item.href ? <NavLink {...item} /> : <NavButton {...item} />}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <NavButton icon="/icon/setting.svg" label="추가옵션" />
    </header>
  );
}
