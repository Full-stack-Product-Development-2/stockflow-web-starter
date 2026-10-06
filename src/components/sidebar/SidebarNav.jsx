import { sidebarNavigation } from "@/data/nav_sidebar";

function SidebarNavItem({ item }) {
  const { active, badge, icon: Icon, label } = item;

  return (
    <li>
      <div
        className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-medium ${
          active ? "bg-[#fdf1ed] text-[#a63d1d]" : "text-muted-foreground"
        }`}
      >
        <Icon aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.8} />
        <span>{label}</span>
        {badge ? (
          <span className="ml-auto inline-flex min-w-5 items-center justify-center rounded-full bg-[#e85d31] px-1.5 py-0.5 text-[11px] font-semibold leading-none text-white">
            {badge}
          </span>
        ) : null}
      </div>
    </li>
  );
}

function SidebarNav() {
  return (
    <nav aria-label="Primary navigation" className="px-3 py-4">
      <ul className="space-y-1">
        {sidebarNavigation.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNav;
