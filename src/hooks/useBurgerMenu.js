import React, {useState} from 'react';

const useBurgerMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return {
        openMenu,
        setOpenMenu
    }

};

export default useBurgerMenu;