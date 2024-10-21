"use client";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import accessCodes from "./lib/accessCodes";

export default function AccessForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [accessContinue, setAccessContinue] = useState(false);
  const [accessCode, setAccessCode] = useState<{
    accessCode: string;
    email: string;
    name: string;
    title: string;
    company: string;
  } | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState("");

  const findAccessCode = (value: string) => {
    console.log("find access code", value);
    // check if value is email by contains "@"
    if (value.includes("@")) {
      console.log("email");
      const email = accessCodes.find((code) => code.email === value);
      if (email) {
        setAccessCode(email);
        return email;
      } else {
        setAccessCode(null);
      }
    } else {
      // check if value is accessCode
      const accessCode = accessCodes.find((code) => code.accessCode === value);
      if (accessCode) {
        setAccessCode(accessCode);
        return accessCode;
      } else {
        setAccessCode(null);
      }
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    findAccessCode(value);
  };

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setAccessContinue(true);

    if (accessCode) {
      // send access code
      console.log("has access", accessCode);
      setProcessing(true);

      const params = {
        email: accessCode.email,
        name: accessCode.name,
        title: accessCode.title,
        company: accessCode.company,
      };

      const u = new URLSearchParams(params).toString();
      // path with access code, email, name, title, company
      const path = `/deck/${accessCode.accessCode}?${u}`;

      console.log(path);
      router.push(path);
    } else {
      setProcessing(true);
      // send email
      console.log("no access");
      const formData = new FormData(e.target);

      formData.append("access_key", "f473c657-e723-490d-bb32-3c7951901032");
      formData.append("subject", `Pitch Deck 2024 - Access Requested`);
      formData.append("replyto", `contact@showy.tv`);
      formData.append("from_name", `Contact Form contact@showy.tv`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
        router.push(pathname + "?" + createQueryString("success", "true"));
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  };

  return (
    <div className="w-full max-w-md mr-auto">
      {result ? (
        <div>
          <p className="text-2xl mb-2">Thank you for your interest!</p>
          <p className="text-base text-white/70">
            We will reach out to you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          method="POST"
          className="space-y-6 relative"
        >
          <div>
            <label
              htmlFor="email"
              className="pl-2 font-mono block text-base mb-1 font-medium leading-6 text-white"
            >
              Email Address or Access Code
            </label>
            {/* {JSON.stringify(accessCode)} */}
            <div className="mt-3">
              <input
                id="email"
                name="email"
                type="text"
                disabled={processing}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                required
                className="block w-full rounded-full border-0 bg-white/5 text-lg h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
              />
            </div>
          </div>
          {!accessCode && accessContinue && (
            <div className="space-y-2">
              <h3 className="font-bold">
                Thank you for your interest in Showy
              </h3>
              <p className="pb-3 opacity-70">
                Please enter the your details to send you a private access.
                <br />
                If you already have access, verify you entered the correct email
                or access code.
              </p>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="pl-2 font-mono block text-base mb-1 font-medium leading-6 text-white"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  disabled={processing}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-full border-0 bg-white/5 text-lg h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="pl-2 font-mono block text-base mb-1 font-medium leading-6 text-white"
                >
                  Job Title
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  disabled={processing}
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-full border-0 bg-white/5 text-lg h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="pl-2 font-mono block text-base mb-1 font-medium leading-6 text-white"
                >
                  Company
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="company"
                  name="company"
                  type="text"
                  disabled={processing}
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="block w-full rounded-full border-0 bg-white/5 text-lg h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-white shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
                />
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={processing}
              className={clsx(
                "rounded-full border border-solid  transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
                accessCode
                  ? "border-indigo-400 bg-indigo-500/40"
                  : "border-black/10 dark:border-white/40",
                processing
                  ? "cursor-not-allowed"
                  : "hover:bg-indigo-600 hover:border-transparent"
              )}
            >
              {processing ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Continue (⌘ Enter)"
              )}
            </button>
          </div>
        </form>
      )}
      <p className="mt-10 text-left text-sm text-gray-400">
        Contact:{" "}
        <a
          href="mailto:contact@showy.tv"
          className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
        >
          contact@showy.tv
        </a>
      </p>
    </div>
  );
}
