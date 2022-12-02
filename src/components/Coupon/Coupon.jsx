import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './Coupon-style';

export default function Coupon() {
  const [couponData, setCouponData] = useState(undefined);
  useEffect(() => {
    axios
      .get('https://test.api.weniv.co.kr/coupon')
      .then((response) => setCouponData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [selected, setSelected] = useState('');
  const [selectedList, setSelectedList] = useState([]);
  const handleAddCoupon = (e) => {};

  return (
    <div>
      <S.CouponTitle>쿠폰 사용</S.CouponTitle>
      {/* <label htmlFor='coupon'>쿠폰 선택</label> */}
      <S.CouponSelectBox onChange={handleAddCoupon} defaultValue='default'>
        {couponData !== undefined ? (
          <>
            <option key='default' value='default'>
              쿠폰 선택
            </option>
            {couponData.map((item, index) => (
              <option key={`coupon${index}`} value={item.couponName}>
                {item.couponName}
              </option>
            ))}
          </>
        ) : (
          <></>
        )}
      </S.CouponSelectBox>
    </div>
  );
}
