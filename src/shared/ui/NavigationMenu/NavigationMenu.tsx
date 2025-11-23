import clx from "classnames";

export interface MenuItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: MenuItem[];
  className: string;
  ariaLabel?: string;
}

export function NavigationMenu(props: NavigationMenuProps) {
  const { items, className, ariaLabel = "Main navigation" } = props;

  const classes = clx(className, "menu");

  return (
    <nav className={classes} aria-label={ariaLabel}>
      <ul className="menu__list">
        {items.map((item) => (
          <li key={item.href} className="menu__item">
            <a href={item.href} className="menu__link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
