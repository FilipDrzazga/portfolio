const text1 = 'A'.split('');
const text1special = 'self-taught'.split('');
const text2 = 'and emerging'.split('');
const text3 = 'creator,'.split('');
const text2special = 'always'.split('');
const text4 = 'trying to push'.split('');
const text5 = 'the boundaries to bring'.split('');
const text6 = 'ideas to'.split('');
const text3special = 'web/app'.split('');
const text7 = 'development'.split('');

const wordsObj = {
    char1:text1,
    char2:text1special,
    char3:text2,
    char4:text3,
    char5:text2special,
    char6:text4,
    char7:text5,
    char8:text6,
    char9:text3special,
    char10:text7
};


const BlurRevealText = ()=>{
    return(
        {Object.entries(wordsObj).map(([key,charArr],id)=>(
            <div key={key}>
                {charArr.map((char,id)=>(
                    <span key={id}>{char}</span>
                ))}
            </div>
        ))}
    );
};

export default BlurRevealText;