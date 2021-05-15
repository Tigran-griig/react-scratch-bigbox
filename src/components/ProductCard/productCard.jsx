import React from "react";
import defaultClasses from "./productCard.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import inStock from "../../images/img/svg/avialaib.svg";
import outOfStock from "../../images/img/svg/noAvialaib.svg";
import newProduct from "../../images/img/svg/new.svg";
import sale from "../../images/img/svg/sale.svg";
import productImage from "../../images/img/png/productImage.png";
import Rate from "../Rate";
import Image from "../Image";
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    const classes = mergeClasses(defaultClasses, props.classes);



    return (
        <div className={classes.root}>
            <Link to={'/product/' + props.item.urlKey} >
            <div className={classes.productCard}>
                <Image  className={classes.imgProduct}
                        src={props.item ?
                         "https://vmall-api.yereone.com/media/6027acbe5fc2b4627256d612/" + props.item?.images[0].path
                         :
                         productImage}/>
                <div className={classes.productIcons}>
                    <span className={classes.stockStatus}>
                      <Image src={props.stockStatus ? inStock : outOfStock}/>
                    </span>
                    <span className={classes.productLabels}>
                        {props.sale && (
                            <div className={classes.sale}>
                                <Image src={sale} className={classes.saleBg}/>
                                <span className={classes.saleText}>ԶԵՂՉ</span>
                            </div>
                        )}
                        {props.newProduct && (
                            <div className={classes.newProduct}>
                                <Image src={newProduct} className={classes.newProductBg}/>
                                <span className={classes.newProductText}>ՆՈՐ</span>
                            </div>
                        )}
                    </span>
                </div>
            </div>
            </Link>
            <div className={classes.info}>
                <span className={classes.name}>
                  {props.item ? props.item?.name : "Փոքրիկ Նվերի Տուփ"}
                </span>
                <span className={classes.price}>
                  {props.item ? props.item?.price + "" + "Դ" : "3000 Դ"}
                </span>
                <Rate rate={props.item ? props.item?.averageRating : 3}/>
            </div>
        </div>
    );
};

export default ProductCard;
