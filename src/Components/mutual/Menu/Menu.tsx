import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.scss';

const ButtonSvg = () => {
    return <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="menu_btn">
            <rect id="bottomline" x="-0.000244141" y="17.5" width="28" height="3.5" rx="1.75" fill="white" />
            <rect id="midline" x="-0.000244141" y="9.09998" width="28" height="3.5" rx="1.75" fill="white" />
            <rect id="topline" width="28" height="3.5" rx="1.75" fill="white" />
        </g>
    </svg>
}


const OpenedMenu = ({ closeMenu, changeState }: any) => {

    const [isTransparent, setIsTransparent] = useState<boolean>(true)

    useEffect(() => {
        setIsTransparent(false);
        setTimeout(() => {
            document.body.style.overflowY = "hidden";
        }, 100)
        return () => {
            setIsTransparent(true);
            document.body.style.overflowY = "visible";
        }
    }, [])

    const navigate = useNavigate();

    const openPage = (id: string) => {
        switch(id){
            case '':
                navigate('/');
                break;
            default:
                navigate('/' + id)
                closeMenu(false);
                break;
        }
        changeState();
        window.scrollTo(0, 0);
    }


    return <div className="menuContainer" style={{ 'opacity': isTransparent ? '0' : '1' }}>
        <button onClick={() => { openPage('') }}>Home</button>
        <button onClick={() => { openPage('about') }}>About</button>
        <button onClick={() => { openPage('skills') }}>Skills</button>
        <button onClick={() => { openPage('projects') }}>Projects</button>
        {/* <button onClick={() => { openPage('/#contact') }}>Contact</button> */}
    </div>
}

function Menu() {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    const changeState = () => {
        if (isMenuOpened) {
            //then close it


            if (!buttonRef.current?.classList.contains('openedState')) return;

            buttonRef.current?.classList.remove('openedState');
            (document.getElementsByClassName('menuContainer')[0] as HTMLElement).style.opacity = "0";
            setTimeout(() => {
                buttonRef.current?.classList.remove('intermediaryState');
                setIsMenuOpened(false);
            }, 200)
            return;
        }
        else {
            //then open it

            if (buttonRef.current?.classList.contains('openedState')) return;

            buttonRef.current?.classList.add('intermediaryState');
            setTimeout(() => {
                buttonRef.current?.classList.add('openedState');
            }, 200)
            setIsMenuOpened(true);
            return;
        }

    }

    return <>
        <div className={`menuButton`} onClick={changeState} ref={buttonRef}>
            <ButtonSvg />
        </div>
        {isMenuOpened && <OpenedMenu closeMenu={setIsMenuOpened} changeState={changeState} />}
    </>


}

export default Menu;
