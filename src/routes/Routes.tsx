import { Route, Routes } from "react-router-dom";
import List from "../components/List";
import Form from "../components/Form";
export const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
};
