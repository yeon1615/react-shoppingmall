import React, { useState } from 'react';
import CounterButton from '../CounterButton/CounterButton';
import * as S from './TotalPrice-style';

export default function TotalPrice(productData) {
  const [counter, setCounter] = useState(1);

  const handleCountDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleCountUp = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <CounterButton {...{ counter, handleCountDown, handleCountUp }} />
      <S.TotalPriceLayout>
        <strong>총 상품 금액</strong>
        <S.TotalQuantity>
          총 수량
          <S.TotalQuantityNum>{counter.toLocaleString()}</S.TotalQuantityNum>개
        </S.TotalQuantity>
        <S.TotalPriceNum>
          {(productData.price * counter).toLocaleString()}
        </S.TotalPriceNum>
        <S.Won>원</S.Won>
      </S.TotalPriceLayout>
    </>
  );
}
