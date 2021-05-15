import React, {useState} from 'react';
import defaultClasses from './productInfo.module.css'
import mergeClasses from "../../helpers/mergeClasses";
import Rate from "../Rate";
import Button from "../Button";
import SelectNumber from "../SelectNumber";
import Select from "../Select";
import useAddToCart from "../../hooks/useAddToCart";
import StarRatings from "react-star-ratings";

const selects1 = [
    {value: 'Կապույտ', iconPosition: 'left', content: '&#xe916;', color: ' #33C0CB'},
    {value: 'Կանաչ', iconPosition: 'left', content: '&#xe917', color: '#6FB337'},
    {value: 'Կարմիր', iconPosition: 'left', content: '&#xe917', color: '#FF4D41'},
    {value: 'Գազարագույն', iconPosition: 'left', content: '&#xe917', color: '#FEBD59'},
    {value: 'Վարդագույն', iconPosition: 'left', content: '&#xe917', color: '#FFC2CB'},

]
const selects2 = [
    {value: 'XL', iconPosition: 'right', content: '\e917', color: '#EAEAEA'},
    {value: 'S', iconPosition: 'right', content: '\e917', color: '#EAEAEA'},
    {value: 'XXL', iconPosition: 'right', content: '\e917', color: '#EAEAEA'},
    {value: 'M', iconPosition: 'right', content: '\e917', color: '#EAEAEA'},
    {value: 'L', iconPosition: 'right', content: '\e917', color: '#EAEAEA'},

]

const ProductInfo = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes)
    const {data} = props
    const [quantity, setQuantity] = useState(1)
    const {addToCard} = useAddToCart(data.id)

    return (
        <div className={classes.root}>
            <div className={classes.details}>
                <div className={classes.stockStatus}>
                    {data.quantity > 0 ?
                        <span className={classes.inStock}><span className={classes.text}>Առկա է</span></span>
                        : <span className={classes.outOfStock}><span className={classes.text}>Առկա չէ</span></span>}
                </div>
                <div className={classes.rate}>
                    <StarRatings
                        rating={data.averageRating}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name='rating'
                    />
                    <p className={classes.review}>Գրել կարծիք</p>
                </div>
                <div>
                    <p className={classes.name}>{data.name}</p>
                    <p className={classes.price}>{data.price + 'Դ'}</p>
                </div>
                <div className={classes.description}>
                    <p className={classes.shortDescription}>{data.shortDescription}</p>
                </div>
            </div>
            <div className={classes.parameters}>
                <form className={classes.form} onSubmit={e => e.preventDefault()}>
                    <div className={classes.selects}>
                        <div className={classes.select}>
                            <Select label={'ԳՈՒՅՆ։'} select={selects1}/>
                        </div>
                        <div className={classes.select}>
                            <Select label={"ՉԱՓ։"} select={selects2}/>
                        </div>
                    </div>
                    <div className={classes.addBag}>
                        <div>
                            <SelectNumber quantity={quantity} setQuantity={setQuantity}/>
                        </div>
                        <Button classes={{button: classes.button}} onClick={() => addToCard(quantity)}>ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ</Button>
                    </div>
                </form>
                <p className={classes.code}>ԿՈԴ: 9591</p>
                <div className={classes.icons}>
                    <span className={classes.iconF}></span>
                    <span className={classes.iconI}></span>
                    <span className={classes.iconT}></span>
                    <span className={classes.iconL}></span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;