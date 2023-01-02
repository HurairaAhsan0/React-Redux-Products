/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Card } from 'antd';
import axios from "axios"
import { SetProducts } from '../redux/Actions/Actions';
import "./ProductComponent.css"
const { Meta } = Card;

const ProductComponent = () => {
    const product = useSelector(store => store.allProducts.products)
    const dispatch = useDispatch();
    const products = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        dispatch(SetProducts(result.data));

    }
    useEffect(() => {
        products()
    }, [])
    const result = product.map((prod) => {
        return (
            <div key={prod.id} className="Card" >
                <Link to={`/Products/${prod.id}`}>
                    <Card
                        hoverable
                        style={{
                            width: 300,
                            margin: 30,
                            padding: 30
                        }}
                        cover={<img alt={prod.title} src={prod.image} />}
                    >
                        <Meta title={prod.title}
                        />
                        <Meta title={`$ ${prod.price}`}
                        />
                        <Meta description={prod.rating.rate}
                        />
                        <Meta description={prod.category}
                        />
                    </Card>
                </Link>
            </div>
        )
    })

    return (
        <>
            {result}
        </>


    )

}

export default ProductComponent
