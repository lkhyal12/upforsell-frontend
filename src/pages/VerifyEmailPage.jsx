import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const VerifyEmailPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const loading = false;
  function handleChange(e, idx) {
    const newCode = [...code];
    const value = e.target.value;
    if (!/^[0-9]*$/.test(value))
      return toast.error("Verification code must contain only digits", {
        id: "digits-error",
      });
    if (value.length === 1) {
      newCode[idx] = value;
      const nextIndex = idx < code.length - 1 ? idx + 1 : idx;
      inputsRef.current[nextIndex].focus();
    } else {
      const splitedValue = [...value].slice(0);
      if (idx < code.length - 1) {
        splitedValue.forEach((v, i) => {
          const index = i + idx;
          if (index < code.length) {
            newCode[index] = v;
          }
        });
      } else newCode[idx] = splitedValue[splitedValue.length - 1];
      const focusIndex = Math.min(idx + splitedValue.length, code.length - 1);
      inputsRef.current[focusIndex]?.focus();
    }
    setCode(newCode);
  }

  function handleKeyDown(e, idx) {
    if (e.key === "Backspace") {
      if (code[idx] === "") {
        const prevIndex = Math.max(0, idx - 1);
        inputsRef.current[prevIndex]?.focus();
      } else {
        const newCode = [...code];
        newCode[idx] = "";
        setCode(newCode);
      }
    } else {
      let index = idx;
      if (e.key === "ArrowRight" && index < code.length - 1) index++;
      else if (e.key === "ArrowLeft" && index > 0) index--;
      inputsRef.current[index]?.focus();
      const input = inputsRef.current[index];
      requestAnimationFrame(() => {
        input.setSelectionRange(input.value.length, input.value.length);
      });
    }
  }

  // handle moving cursor to the end
  function handleFocus(e) {
    const input = e.target;
    requestAnimationFrame(() => {
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    async function handleSubmit() {
      if (!code.every((el) => el)) return;
      const joindedCode = code.join("");
      console.log({ joindedCode });
    }
    handleSubmit();
  }, [code]);
  return (
    <div className="h-[90dvh] flex items-center justify-center px-1">
      <div className="w-xl max-w-full rounded-md shadow bg-white p-5 ">
        <div className="flex items-center justify-center">
          <Mail size={40} className="text-emerald-600 mb-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center">
          Verify Your Email
        </h2>

        <p className="text-gray-500 mb-3 text-center">
          We've sent a 6-digit verification code to
        </p>
        <p className="font-semibold text-center">exmaple@gmail.com</p>

        {/* inputs  */}
        <div className="flex items-center justify-between my-10 ">
          {code.map((el, idx) => (
            <input
              key={idx}
              type="text"
              value={el}
              onChange={(e) => handleChange(e, idx)}
              ref={(item) => (inputsRef.current[idx] = item)}
              className="size-10 md:size-15 rounded-md border border-gray-300 text-center text-2xl font-semibold md:text-3xl focus:outline-emerald-600 text-emerald-600"
              onKeyDown={(e) => handleKeyDown(e, idx)}
              onClick={handleFocus}
            />
          ))}
        </div>

        <button
          className="text-white bg-emerald-500 font-semibold rounded-md cursor-pointer flex items-center justify-center gap-2 py-2 disabled:opacity-70 disabled:pointer-events-none w-full"
          disabled={loading}
        >
          {loading ? (
            <Loader size="sm" />
          ) : (
            <>
              Verify & Continue <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
