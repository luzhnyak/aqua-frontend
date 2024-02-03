import { FC } from "react";
import { ReactComponent as IconSettings } from "../../images/icons/cog-6-tooth.svg";
import { ReactComponent as IconLogout } from "../../images/icons/arrow-right-on-rectangle.svg";

import css from "./Header.module.css";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";

interface IProps {
  openUserInfoModal: () => void;
  openUserLogoutModal: () => void;
}

const UserLogoModal: FC<IProps> = ({
  openUserInfoModal,
  openUserLogoutModal,
}) => {
  return (
    <AnimatedComponent css={css.dropDownMenuContent}>
      <button className={css.settingsBtn} onClick={openUserInfoModal}>
        <IconSettings className={css.iconSettings} />
        Settings
      </button>
      <button className={css.logoutBtn} onClick={openUserLogoutModal}>
        <IconLogout className={css.iconLogout} />
        Logout
      </button>
    </AnimatedComponent>
  );
};

export default UserLogoModal;
