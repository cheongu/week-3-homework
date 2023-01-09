import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>무엇을 할까요?</h1>
        <button
          onClick={() => {
            navigate("/write");
          }}
        >
          할일 기록하기
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/detail");
          }}
        >
          TODO LIST
        </button>
      </div>
    </div>
  );
};

export default Home;
