import { useEffect, useState } from "react";
import Success from "./Success";
import Register from "./Register";

function Form() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = `Brunel - Register`;
  }, []);

  if (success) {
    return <Success />;
  }
  return <Register setSuccess={setSuccess} />;
}

export default Form;
