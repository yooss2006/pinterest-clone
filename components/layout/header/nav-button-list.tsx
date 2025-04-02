import { NavButton } from '@/components/layout/header/nav-button';

const navButtonList = [
  { icon: '/icon/update.svg', label: '업데이트', keyword: 'update' },
  { icon: '/icon/message.svg', label: '메시지', keyword: 'message' }
];
export function NavButtonList() {
  return (
    <div className="flex h-full flex-col justify-between">
      <ul className="mb-6 flex flex-col gap-6">
        {navButtonList.map((item, index) => (
          <li key={index}>
            <NavButton {...item} />
          </li>
        ))}
      </ul>
      <NavButton icon="/icon/setting.svg" label="추가옵션" keyword="setting" />
    </div>
  );
}
