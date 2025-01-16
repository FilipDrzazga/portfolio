import * as S from './GooeyBloobs.styled';

const GooeyBloobs = ()=>{
    return(
        <S.BloobsContainer>
            <svg style={{display:'none'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <S.bloob animate={{x:[200,-200],transition:{duration:2,repeat:Infinity,repeatType:"reverse"}}}></S.bloob>
            <S.bloob></S.bloob>
        </S.BloobsContainer>
    )
};

export default GooeyBloobs;