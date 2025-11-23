import clx from "classnames";

export interface MenuItem {
  label: string;
  href: string;
}

interface NavigationMenuProps {
  items: MenuItem[];
  className?: string;
  ariaLabel?: string;
}

export function NavigationMenu(props: NavigationMenuProps) {
  const { items, className, ariaLabel = "Main navigation" } = props;

  const classes = clx(className, "menu");

  const listClass = clx(className && `${className}-list`);
  const itemClass = clx(className && `${className}-item`);
  const linkClass = clx(className && `${className}-link`);

  return (
    <nav className={classes} aria-label={ariaLabel}>
      <ul className={listClass}>
        {items.map((item) => (
          <li key={item.href} className={itemClass}>
            <a href={item.href} className={linkClass}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
