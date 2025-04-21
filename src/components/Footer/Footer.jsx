import Logo from "../Logo/Logo";
import { useMedia } from "../../utils/hooks/useMedia";
import { FooterContacts } from "./FooterContacts/FooterContacts";
import { FooterInformBlock } from "./FooterInformBlock/FooterInformBlock";
import FooterMenu from "./FooterMenu/FooterMenu";

import {
  FooterWrap,
  InfoWrap,
  ScheduleBlock,
  ScheduleText,
  ScheduleTitle,
  Wrap,
} from "./footer.styled";

const Footer = () => {
  const { isMobileScreen } = useMedia();
  return (
    <FooterWrap>
      <Wrap>
        <Logo />
        {isMobileScreen && <FooterContacts />}
        {!isMobileScreen && (
          <InfoWrap>
            <FooterInformBlock />
            <FooterMenu />
            <FooterContacts />
          </InfoWrap>
        )}
      </Wrap>
      <ScheduleBlock>
        <ScheduleTitle>графік роботи</ScheduleTitle>
        <ScheduleText>пн - пт з 9:30 до 18:00</ScheduleText>
        <ScheduleText>сб - нд вихідний</ScheduleText>
      </ScheduleBlock>

      {/* <p>
        © 2023 <span>команда розробників</span>
      </p> */}
    </FooterWrap>
  );
};

export default Footer;
