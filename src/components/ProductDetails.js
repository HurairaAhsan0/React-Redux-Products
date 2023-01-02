/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { SelectProduct } from '../redux/Actions/Actions';
import { Card, Switch } from 'antd';
const { Meta } = Card;

const ProductDetails = () => {
    const ProductId = useParams(['productId']);
    const { productId } = ProductId;
    const dispatch = useDispatch();
    const FetchingProducts = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch(SelectProduct(res.data))
    }
    useEffect(() => {
        productId && productId !== " " && FetchingProducts()
    }, [productId])
    const product = useSelector(store => store.allProducts.product)
    const [loading, setLoading] = useState(false);
    const onChange = (checked) => {
        setLoading(!checked);
    }
    const productDetails = product.map((prod) => {
        const { title, description, category, rating, price, image } = prod;
        return (
            <div key={prod.id} style={{ display: 'flex', justifyContent: 'flex-start', padding: '0.5rem' }} >
                <Switch checked={loading} onChange={onChange} />
                <Card
                    hoverable
                    bordered
                    loading={loading}
                    style={{
                        width: 700,
                    }}
                    cover={<img alt={title} src={image} />}
                >
                    <Meta title={title} description={description} />
                    <Meta title={`$ ${price}`} />
                    <Meta description={rating.rate} />
                    <Meta description={category} />
                </Card>
            </div>
        )
    })

    return (
        <div>

            {productDetails && productDetails}
        </div>
    )
}

export default ProductDetails;
