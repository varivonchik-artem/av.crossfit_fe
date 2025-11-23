import React from "react";
import CompanyLogo from "../../../../shared/assets/images/logo.png";
import { BurgerButton, Button, Image, Logo, NavigationMenu } from "../../../../shared/ui";
import { headerMenuItems } from "../../config/headerMenu";

export function Header(): React.ReactElement {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo href="/">
          <Image src={CompanyLogo} alt="Company logo" height="25" width="135" />
        </Logo>
      </div>

      <NavigationMenu className="header__menu" items={headerMenuItems} />

      <div className="header__actions">
        <Button className="header__book-button">Book now</Button>
        <BurgerButton className="header__burger-button" />
      </div>
    </header>
  );
}
