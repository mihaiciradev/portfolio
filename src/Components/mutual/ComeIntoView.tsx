import React, { useEffect, useRef } from 'react';

type ComeIntoViewTypes = {
    fromLeft?: boolean
}

function ComeIntoView(props: React.PropsWithChildren<ComeIntoViewTypes>) {
    const wrapperRef = useRef<any>(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkScroll = () => {
        const scrollY = window.scrollY;
        const element = wrapperRef.current;
        const parentOffsetTop = element.offsetParent.offsetTop;

        if (scrollY * 1.7 > parentOffsetTop) {
            element.style.transform = "translateX(0)";
            element.style.opacity = "1";
            // setTimeout(() => {
            //     element.style.display = "block";
            // }, 200)
        }
        else {
            element.style.transform = `translateX(${props.fromLeft ? '-50px' : '50px'})`;
            element.style.opacity = "0";
            // setTimeout(() => {
            //     element.style.display = "none";
            // }, 200)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', checkScroll);

        return () => { document.removeEventListener('scroll', checkScroll) }
    }, [checkScroll])

    return <div ref={wrapperRef}>
        {props.children}
    </div>
}


export default ComeIntoView;