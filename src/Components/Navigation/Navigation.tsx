import * as S from './Navigation.styled';


const Navigation = ()=>{
    return(
        <S.SectionNavigation>
            <S.HeaderNavigation>
                <S.TitleNavigation>FILIPDRZAZGA</S.TitleNavigation>
                <S.NavNavigation>
                    <S.UlNavigation>
                        <S.LiNavigation>about</S.LiNavigation>
                        <S.LiNavigation>work</S.LiNavigation>
                        <S.LiNavigation>contact</S.LiNavigation>
                    </S.UlNavigation>
                </S.NavNavigation>
            </S.HeaderNavigation>
        </S.SectionNavigation>
    );
};

export default Navigation;