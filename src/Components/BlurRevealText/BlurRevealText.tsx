import * as S from './BlurRevealText.styled';

const text1 = 'A'.split('');
const text1special = 'self-taught'.split('');
const text2 = 'and emerging'.split('');
const text3 = 'creator,'.split('');
const text2special = 'always'.split('');
const text4 = 'trying to push'.split('');
const text5 = 'the boundaries to bring'.split('');
const text3special = 'cuzy'.split('');
const text6 = 'ideas to'.split('');
const text4special = 'web/app'.split('');
const text7 = 'development'.split('');

const wordsObj = {
    char1:text1,
    char2:text1special,
    char3:text2,
    char4:text3,
    char5:text2special,
    char6:text4,
    char7:text5,
    cart8:text3special,
    char9:text6,
    char10:text4special,
    char11:text7
};


const BlurRevealText = ()=>{
    return(
    <>        
        {Object.entries(wordsObj).map(([key,charArr],id)=>(
            <S.CharactersContainer key={key}>
                {charArr.map((char,id)=>(
                    <S.SpanCharacters key={id}>{char}</S.SpanCharacters>
                ))}
            </S.CharactersContainer>
        ))}
    </>
    );
};

export default BlurRevealText;