import React, {useState} from 'react';
import defaultClasses from './productTabs.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import Button from "../Button";
import Description from "./Description";
import Parameters from "./Parameters";
import Reviews from "./Reviews";

const ProductTabs = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const [activeTabs, setActiveTabs] = useState('description')
    const {data} = props

    return (
        <div className={classes.root}>
            <div className={classes.panel}>
                <Button classes={activeTabs === 'description' ? {button: classes.tabActiv} : {button: classes.tab}}
                        onClick={() => setActiveTabs("description")}>
                    ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ
                </Button>
                <Button classes={activeTabs === 'parameters' ? {button: classes.tabActiv} : {button: classes.tab}}
                        onClick={() => setActiveTabs("parameters")}>
                    ՊԱՐԱՄԵՏՐԵՐ
                </Button>
                <Button classes={activeTabs === 'opinions' ? {button: classes.tabActiv} : {button: classes.tab}}
                        onClick={() => setActiveTabs("opinions")}>
                    ԿԱՐԾԻՔՆԵՐ
                </Button>
            </div>
            {activeTabs === 'description' && <Description description={data.shortDescription}/>}
            {activeTabs === 'parameters' && <Parameters attributes={data.attributes}/>}
            {activeTabs === 'opinions' && <Reviews id={data.id}/>}
        </div>
    );
};

export default ProductTabs;