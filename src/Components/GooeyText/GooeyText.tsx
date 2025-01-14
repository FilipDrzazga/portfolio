const GooeyText = () => {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id='gooey-text'>
                <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5" result="goo" />
                {/* <feBlend in="SourceGraphic" in2="goo" /> */}
            </filter>
            {/* <filter id="old-goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <filter id="fancy-goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter> */}

        </defs>
        <text filter="url(#gooey-text)" x='5' y='25' fontFamily="'Roboto'" fontSize='30' fill="white" >Custom Font With Filter</text>
</svg>
    )
};

export default GooeyText