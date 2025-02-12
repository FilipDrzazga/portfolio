import * as S from "./Navigation.styled";
import SpanAnimation from "../SpanAnimation/SpanAnimation";

const tabs = ["ABOUT", "PLAYGROUND", "WORK", "LET'S TALK"];

const Navigation = () => {
  // const [isSelected, setIsSelected] = useState(tabs[0]);

  return (
    <S.SectionNavigation>
      <S.HeaderNavigation>
        <S.NavNavigation>
          <S.UlNavigation>
            {tabs.map((tab, index) => (
              <S.LiNavigation
                key={index}
                //  onClick={() => setIsSelected(tab)}
              >
                <S.ANavigation>{<SpanAnimation text={tab} withHover />}</S.ANavigation>
                {/* {tab === isSelected && <S.ANavigationUnderline key={index} layoutId="underline"></S.ANavigationUnderline>} */}
              </S.LiNavigation>
            ))}
          </S.UlNavigation>
        </S.NavNavigation>
      </S.HeaderNavigation>
    </S.SectionNavigation>
  );
};

export default Navigation;
