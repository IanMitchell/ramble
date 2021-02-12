import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert, { AlertTypes } from "../../admin/components/alerts/Alert";
import LoginLayout from "../../admin/layouts/Login";

export default function AdminLogin() {
  const [code, setCode] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ email }) => {
    setCode(null);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ destination: email }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();

    if (json.success) {
      setCode(json.code);
    }
  };

  return (
    <LoginLayout title="Sign in">
      {/* {error && (
        <Alert type={AlertTypes.ERROR} message={error} className="mt-8" />
      )} */}
      {code ? (
        <Alert
          type={AlertTypes.INFO}
          message={`An email has been sent to you. Your code is ${code}`}
          className="mt-8"
        />
      ) : (
        <div className="mt-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block dark:text-gray-300 text-gray-700 text-sm font-medium"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  ref={register({ required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="placeholder-gray-400 block px-3 py-2 w-full border border-gray-300 dark:border-gray-700 focus:border-indigo-500 rounded-md focus:outline-none shadow-sm appearance-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {code ? (
              <p>Your code is {code}</p>
            ) : (
              <button
                type="submit"
                className="flex justify-center px-4 py-2 w-full text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
              >
                Sign in
              </button>
            )}
          </form>
        </div>
      )}
    </LoginLayout>
  );
}
