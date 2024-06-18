import { ChangeEvent,useState } from "react";
import { Link } from "react-router-dom";
import {SignInput} from "@100xdevs/medium-common"; // Assuming you are using React Router for navigation

interface SignupInput {
  name: string;
  username: string;
  password: string;
}

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInputs({
      ...postInputs,
      name: e.target.value,
    });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInputs({
      ...postInputs,
      username: e.target.value,
    });
  };

  return (
    <div className="flex h-screen justify-center flex-col">
      {JSON.stringify(postInputs)}
      <div className="flex justify-center">
        <div>
            <div className="text-3xl font-extrabold">
              {type === "signup"
                ? "Create an account"
                : "Sign in to your account"}
            </div>
            <div className="text-slate-400">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Login" : "Sign up"}
              </Link>
            </div>
          </div>
          <div>
            <LabelledInput
              label="Name"
              placeholder="Harkirat Singh..."
              onChange={handleNameChange}
            />
            <LabelledInput
              label="Username"
              placeholder="harkirat@gmail.com"
              onChange={(e)=> {
                setPostInputs({
                    ...postImputs,
                    name;e.target.value
                })
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e)=> {
                setPostInputs({
                    ...postImputs,
                    name;e.target.value
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-black">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900"
      />
    </div>
  );
}
