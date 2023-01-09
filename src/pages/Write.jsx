import { Link, useLocation } from "react-router-dom";

const Write = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <div>
      {/* onChangeHandler */}
      <h3>작성자</h3>
      <input />
      <h3>제목</h3>
      <input />
      <h3>내용</h3>
      <input />
      <div>
        {/* onClickHandler */}
        <button>추가하기</button>
      </div>

      <div>{`현재 페이지 : ${location.pathname.slice(1)}`}</div>
      <Link to="/">home 페이지로 이동하기</Link>
    </div>
  );
};

export default Write;
