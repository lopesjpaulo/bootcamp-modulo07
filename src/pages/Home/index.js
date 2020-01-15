import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/16/337-9918-216/337-9918-216_zoom1.jpg" alt="Tênis" />
                <strong>Tênis adidas</strong>
                <span>R$ 149,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/16/337-9918-216/337-9918-216_zoom1.jpg" alt="Tênis" />
                <strong>Tênis adidas</strong>
                <span>R$ 149,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/16/337-9918-216/337-9918-216_zoom1.jpg" alt="Tênis" />
                <strong>Tênis adidas</strong>
                <span>R$ 149,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/16/337-9918-216/337-9918-216_zoom1.jpg" alt="Tênis" />
                <strong>Tênis adidas</strong>
                <span>R$ 149,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/16/337-9918-216/337-9918-216_zoom1.jpg" alt="Tênis" />
                <strong>Tênis adidas</strong>
                <span>R$ 149,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-zeus-esportivo-masculino/16/337-9918-216/337-9918-216_zoom1.jpg" alt="Tênis" />
                <strong>Tênis adidas</strong>
                <span>R$ 149,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    )
}