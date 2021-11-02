import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'
function Products() {
    const url = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {

        // setProduct   

        setProduct({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            // .cache(() => {
            //     setProduct({
            //         loading: false,
            //         data: null,
            //         error: true
            //     })  
            // })
        }, [url]);    

        //     // POST request using fetch inside useEffect React hook
        //     const requestOptions = {
        //         method: 'GET',
        //         // params: {keyword: 'iphone',asin: 'B07XQXZXJC', country: 'US', variants: '1', top: '0'},
        //         // headers: {
        //         //     'x-rapidapi-host': 'amazon-product-reviews-keywords.p.rapidapi.com',
        //         //     'x-rapidapi-key': 'fbd7ac4bd7msh5778d3c909f6e59p1148e2jsn4f9e49b7b27e',
        //         //     useQueryString: true
        //         // },
        //         //body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        //     };
        //     //https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps
        //     fetch('https://fakestoreapi.com/products', requestOptions)
        //         //.then(response => response.json())
        //         .then(response => {
        //             setProduct({
        //                 loading: false,
        //                 data: response.data,
        //                 error: false
        //             })
        //         })
        //         // .cache(() => {
        //         //     setProduct({
        //         //         loading: false,
        //         //         data: null,
        //         //         error: true
        //         //     })
        //         // })


        //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);


        if (product.data) {
                content =
                product.data.map((prod, key) =>
                    <div>
                        <ProductCard product={prod}></ProductCard>
                        {/* <h1 className="font-bold text-xl mb-3">
                            {prod.category}
                        </h1>
                        <div>
                            <img src={prod.image} alt={prod.category}/>
                        </div>
                        <div className="font-bold text-xl mb-3">
                            $ {prod.price}
                        </div>
                        <h1 className="font-bold text-xl mb-3">
                            {prod.description}
                        </h1> */}
                    </div>
                )
        }

        return (
            <div>
                <h1 className="font-bold text-2xl mb-3">
                    My Orders
                </h1>
                {content}
            </div>
        )
    }

export default Products