import * as S from './CounterButton-style';

export default function CounterButton({
  counter,
  handleCountDown,
  handleCountUp,
}) {
  return (
    <S.CounterButtonLayout>
      <S.CounterButtons>
        <S.MinusButton onClick={handleCountDown}></S.MinusButton>
        <p>{counter}</p>
        <S.PlusButton onClick={handleCountUp}></S.PlusButton>
      </S.CounterButtons>
    </S.CounterButtonLayout>
  );
}
