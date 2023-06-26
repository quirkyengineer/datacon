import React from 'react';
import JumboNavSection from "@jumbo/components/JumboVerticalNavbar/JumboNavSection";
import JumboNavCollapsible from "@jumbo/components/JumboVerticalNavbar/JumboNavCollapsible";
import JumboNavItem from "@jumbo/components/JumboVerticalNavbar/JumboNavItem";

const NAV_VARIANTS = {
    'section': JumboNavSection,
    'collapsible': JumboNavCollapsible,
    'nav-item': JumboNavItem
};

const JumboNavIdentifier = ({item, isNested, translate}) => {
    if(!item) return null;

    if(item.type && ['section', 'collapsible', 'nav-item'].includes(item.type)) {
        const NavComponent = NAV_VARIANTS[item.type];
        return <NavComponent translate item={item} isNested={isNested}/>
    }
};

JumboNavIdentifier.defaultProps = {
    isNested: false
};

export default JumboNavIdentifier;