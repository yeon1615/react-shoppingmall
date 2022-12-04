import styled from 'styled-components';
import DeleteIcon from '../../assets/images/icon-delete.svg';

export const CouponLayout = styled.div`
  margin-bottom: 30px;
`;

export const CouponTitle = styled.h3`
  padding-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
`;

export const CouponSelectBox = styled.select`
  width: 600px;
  height: 40px;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 14px;
  line-height: 18px;
  color: #828282;
`;

export const SelectedCoupon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 40px;
  margin-bottom: 10px;
  padding: 11px 11px 11px 14px;
  border-radius: 5px;
  background-color: #f3f0fb;
`;

export const CouponName = styled.p`
  font-size: 14px;
  line-height: 18px;
`;

export const DeleteButton = styled.button`
  width: 14px;
  height: 14px;
  background: url(${DeleteIcon}) no-repeat center / cover;
`;
