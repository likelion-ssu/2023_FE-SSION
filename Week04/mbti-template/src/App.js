import { Route, Routes } from "react-router-dom";
import { Landing, Test, Result } from "./pages";

function App() {
  return (
    <div className="container">
      {/* Routes는 라우팅할 페이지들을 덮는 Wrapper
      Route는 각각 라우팅 될 페이지들
      페이지 이동을 하고싶다면, useNavigation()와 navigate 메서드 이용합시다 */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
