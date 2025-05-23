import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { getAssetPath } from "../../utils/paths";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const location = useLocation();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      if (id === "register") {
        window.location.hash = "/register";
        setVisibility(false);
        return;
      }

      if (location.pathname !== '/') {
        window.location.hash = `/#${id}`;
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setVisibility(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("programs")}>
          <Span>{t("Programs")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Span>
            <Link to="/schedule" style={{ color: 'inherit', textDecoration: 'none' }}>
              {t("Schedule")}
            </Link>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: "180px" }}>
          <Span>
            <Button onClick={() => scrollTo("register")}>
              {t("Register")}
            </Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src={getAssetPath("/img/svg/logo.svg")} width="141px" height="104px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
