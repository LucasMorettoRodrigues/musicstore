import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Products from './Products'

const SectionContainer = styled.div`
    max-width: 1520px;
    margin: 0 auto;
    position: relative;
    padding: 40px 20px;
    overflow-x: hidden;

    @media (max-width: 816px) {
        padding: 40px 0;
    }
`
const Title = styled.h1`
    margin-left: 80px;
    font-size: 26px;

    @media (max-width: 816px) {
        margin-left: 100px;
    }

    @media (max-width: 635px) {
       text-align: center;
       margin: 0;
    }
`
const ProductsContainer = styled.div`
    display: flex;
    padding: 30px 0;

    @media (max-width: 816px) {
        display: block;
        padding-bottom: 0;
    }
`
const ArrowButton = styled.button`
    position: absolute;
    top: 88px;
    z-index: 1;
    width: 90px;
    height: 400px;
    border: none;
    background: white;
    top: 100px;
    right: ${props => props.direction === "right" ? 0 : null};
    left: ${props => props.direction === "left" ? 0 : null};
    transform: ${props => props.direction === "left" ? "rotate(180deg)" : null};

    > i {
        color: #222;
        font-size: 4em;
        opacity: 0.7;
        cursor: pointer;
    }

    &:hover i {
        opacity: 1;
    }

    @media (max-width: 816px) {
        display: none;
    }
`
const ItemsContainer = styled.div`
    display: flex;
    margin-left: 80px;
    transform: translateX(0);
    transition: all .5s ease;

    > a {
        margin-right: 20px;
    }

        @media (max-width: 816px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 0;

        > a {
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 20px;
        }
    }

    @media (max-width: 500px) {
    > a {
        margin-left: 0;
        margin-right: 0;
    }
}
`

const Carousel = () => {

    const listRef = useRef()
    const productsContainer = useRef()
    const [position, setPosition] = useState(0)

    const handleScroll = (direction) => {

        let maxSlide = 1

        if (productsContainer.current.getBoundingClientRect().width < 1409 &&
            productsContainer.current.getBoundingClientRect().width > 1090) maxSlide = 2
        if (productsContainer.current.getBoundingClientRect().width <= 1090) maxSlide = 3

        if (direction === "left" && position < 0) {
            listRef.current.style.transform = `translateX(${position + 320}px)`
            setPosition(position + 320)
        }
        if (direction === "right" && position > (-320 * maxSlide)) {
            listRef.current.style.transform = `translateX(${position - 320}px)`
            setPosition(position - 320)
        }
    }

    return (
        <SectionContainer>
            <Title>Best Sellers</Title>
            <ProductsContainer ref={productsContainer}>
                <ArrowButton onClick={() => handleScroll("left")} direction="left">
                    <i class="bi bi-chevron-right"></i>
                </ArrowButton>
                <ItemsContainer ref={listRef}>
                    <Products />
                </ItemsContainer>
            </ProductsContainer>
            <ArrowButton onClick={() => handleScroll("right")} direction="right">
                <i class="bi bi-chevron-right"></i>
            </ArrowButton>
        </SectionContainer >
    )
}

export default Carousel