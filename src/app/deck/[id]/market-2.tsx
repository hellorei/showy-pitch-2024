import AnimatedNumber from "@/components/AnimatedNumber";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function DeckPage() {
  const market = [
    {
      title: "Content Production Mgmt.",
      size: 4.2,
      growth: 13.2,
      case: (
        <>
          <svg
            fill="none"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5.615 2.146000000000001 139.771 34.042"
          >
            <path
              clip-rule="evenodd"
              d="M5.615 27.26l5.015-3.851c2.664 3.485 5.494 5.092 8.645 5.092 3.134 0 5.884-1.588 8.428-5.046l5.086 3.758c-3.67 4.986-8.232 7.62-13.514 7.62-5.265 0-9.871-2.617-13.66-7.574z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              clip-rule="evenodd"
              d="M18.992 10.523l-8.925 7.71-4.126-4.797 13.07-11.29 12.967 11.299-4.145 4.78z"
              fill="#fff"
              fill-rule="evenodd"
            />
            <path
              d="M51.754 30.077c-3.047 0-5.587-.99-7.647-2.97-2.06-2.008-3.075-4.582-3.075-7.723 0-3.167 1.043-5.77 3.102-7.807 2.09-2.065 4.63-3.082 7.65-3.082 3.725 0 7.025 1.61 8.946 4.13l-3.36 3.535c-1.608-1.727-3.358-2.603-5.248-2.603-1.609 0-2.935.536-4.037 1.64-1.072 1.105-1.607 2.492-1.607 4.16 0 1.612.535 2.97 1.607 4.074 1.102 1.074 2.428 1.61 4.008 1.61 2.06 0 3.867-.905 5.362-2.687l3.5 3.367c-.96 1.273-2.258 2.32-3.867 3.14-1.609.82-3.386 1.216-5.334 1.216zM66.875 8.182v21.584H61.91V8.182zm4.707 4.581c-1.664 0-2.877-1.216-2.877-2.883 0-1.613 1.27-2.83 2.877-2.83 1.61 0 2.852 1.217 2.852 2.83 0 1.667-1.243 2.886-2.852 2.886zm2.513 1.387v15.616h-4.996V14.15zm9.561 15.956c-2.456 0-4.43-.764-5.981-2.292-1.525-1.527-2.287-3.48-2.287-5.884 0-2.405.762-4.355 2.314-5.884 1.553-1.528 3.555-2.29 6.038-2.29 3.246 0 6.097 1.583 7.422 4.553l-3.978 2.095c-.79-1.33-1.891-2.01-3.33-2.01-1.045 0-1.891.34-2.57 1.02a3.526 3.526 0 0 0-.987 2.516c0 2.065 1.495 3.593 3.5 3.593 1.439 0 2.765-.792 3.33-2.008l3.98 2.375c-1.356 2.603-4.149 4.216-7.45 4.216zm24.773-.34h-5.928l-4.602-6.196-.733.68v5.516h-4.963V8.182h4.966v10.495l4.683-4.527h6.068l-6.687 6.281zm.333-8.119V8.86h5.305v12.703c0 2.347 1.355 3.479 3.303 3.479 1.918 0 3.272-1.189 3.272-3.48V8.86h5.335v12.787c0 6.167-4.263 8.487-8.607 8.487-4.318 0-8.608-2.32-8.608-8.487zm29.005-7.891c2.23 0 4.037.791 5.475 2.375 1.439 1.556 2.144 3.508 2.144 5.799 0 2.293-.733 4.243-2.171 5.856-1.441 1.583-3.246 2.377-5.419 2.377-1.723 0-3.218-.566-4.431-1.697v7.722h-4.996V14.15h4.912v1.444c1.213-1.218 2.708-1.838 4.486-1.838zm2.539 8.23c0-2.036-1.465-3.592-3.498-3.592-2.032 0-3.527 1.556-3.527 3.593 0 .99.337 1.839.987 2.546.676.707 1.523 1.047 2.54 1.047 1.015 0 1.862-.34 2.511-1.047a3.648 3.648 0 0 0 .99-2.546z"
              fill="#fff"
            />
          </svg>
          <br />
          <span>150M ARR</span>
          <br />
          <span>100% YoY Growth</span>
        </>
      ),
      problem: "General purpose",
      problems: [
        {
          key: "Generic",
          summary: "without support for creative workflows.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Limited",
          summary: "content creation tools & integrations.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Separated",
          summary: "storage & assets management.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      title: "Digital Assets Management",
      size: 7.7,
      growth: 18.7,
      case: (
        <>
          <svg
            preserveAspectRatio="xMinYMid meet"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 133 32"
            height="25"
          >
            <path
              fill="#F5F5F8"
              d="M64.115 18.059c1.743-.133 2.35-.37 2.798-.74v1.294c0 2.06-1.584 3.67-4.119 3.67-1.874 0-2.931-.713-2.931-1.98 0-1.875 2.165-2.085 4.252-2.244Zm37.362-5.65c1.981 0 3.406 1.24 3.723 3.3h-7.578c.396-2.111 1.769-3.3 3.855-3.3Zm-61.629.396v11.538h2.746V12.805h4.648V10.35h-4.648v-.844c0-1.294.66-2.007 1.875-2.007h2.72V5.017h-2.72c-2.984 0-4.622 1.558-4.622 4.489v.844h-2.324v2.455h2.327Zm9.005-2.428h2.033l.423 2.904c.792-1.98 2.324-3.036 4.753-3.036h.501v2.667h-.476c-3.115 0-4.489 1.611-4.489 4.621v6.813h-2.745v-13.97Zm13.44 14.231c2.851 0 4.251-.924 4.965-2.323.263 1.293 1.083 2.06 2.587 2.06h1.268v-2.482h-.607c-.555 0-.845-.317-.845-.898v-5.598c0-3.379-2.191-5.412-5.915-5.412-3.486 0-6.073 1.928-6.364 4.726h2.825c.29-1.558 1.4-2.297 3.46-2.297 2.058 0 3.247.924 3.247 2.693 0 .634-1.188.793-2.904.95-3.539.344-6.998.714-6.998 4.436 0 2.455 2.165 4.145 5.28 4.145ZM72.67 10.377h2.138l.264 2.217c.95-1.61 2.772-2.64 4.753-2.64 1.821 0 3.168.95 3.855 2.614.026.053.08.053.106 0 .897-1.61 2.694-2.614 4.779-2.614 2.535 0 4.251 1.9 4.251 4.911v9.478h-2.745v-8.818c0-2.007-.793-3.115-2.271-3.115-2.06 0-3.671 1.452-3.671 3.406v8.527h-2.746v-8.818c0-2.007-.791-3.115-2.27-3.115-2.06 0-3.697 1.584-3.697 3.723v8.21H72.67V10.377Zm29.018 14.363c3.301 0 5.783-1.98 6.417-4.965h-2.826c-.475 1.61-1.69 2.429-3.591 2.429-2.482 0-3.987-1.558-4.145-4.278 0-.053.053-.106.132-.106h10.483v-.897c0-4.225-2.694-6.97-6.681-6.97-3.986 0-6.917 2.772-6.917 7.472 0 4.225 2.825 7.313 7.129 7.313l-.001.002Zm8.845-3.935c1.083 0 1.875.793 1.875 1.875 0 1.082-.793 1.874-1.875 1.874-1.082 0-1.901-.818-1.901-1.874 0-1.057.818-1.875 1.901-1.875Zm1.795-10.428h1.532c1.874 0 2.851 1.083 2.851 3.141v10.825h-2.746V14.1c0-.766-.344-1.161-.951-1.161h-.687v-2.561h.001Zm13.15-.397c4.436 0 7.024 3.09 7.024 7.234 0 4.673-2.931 7.393-7.024 7.393-4.462 0-7.023-3.115-7.023-7.393 0-4.594 3.01-7.234 7.023-7.234Zm0 12.172c2.721 0 4.172-2.086 4.172-4.938 0-2.851-1.557-4.779-4.172-4.779-2.614 0-4.172 1.848-4.172 4.78 0 3.194 1.743 4.937 4.172 4.937Zm-10.693-17.24c1.056 0 1.848.79 1.848 1.847s-.793 1.848-1.848 1.848c-1.055 0-1.875-.818-1.875-1.848 0-1.03.793-1.848 1.875-1.848ZM2.64 16c0 4.726-.872 9.267-2.508 13.413-.079.21-.132.448-.132.686C0 31.076.766 32 1.847 32c.687 0 1.346-.423 1.61-1.083A41.071 41.071 0 0 0 6.255 16 41.07 41.07 0 0 0 3.457 1.082 1.75 1.75 0 0 0 1.847 0C.765 0 0 .924 0 1.901c0 .238.053.475.132.687C1.768 6.732 2.64 11.275 2.64 16Zm7.23 0c0 3.458-.396 6.838-1.135 10.059a2.28 2.28 0 0 0-.053.422c0 1.003.792 1.901 1.848 1.901.792 0 1.505-.554 1.689-1.346a47.513 47.513 0 0 0 1.293-11.037c0-3.802-.449-7.498-1.293-11.036a1.746 1.746 0 0 0-1.69-1.346c-1.055 0-1.847.87-1.847 1.874 0 .132.027.29.053.423A45.482 45.482 0 0 1 9.87 16Z"
            ></path>
            <path
              fill="#F5F5F8"
              fill-rule="evenodd"
              d="M17.128 16c0-1.664-.08-3.274-.238-4.885-.105-1.109.739-2.06 1.821-2.06.924 0 1.69.687 1.769 1.585.184 1.768.264 3.538.264 5.36 0 1.82-.08 3.59-.264 5.359-.08.897-.845 1.584-1.769 1.584-1.082 0-1.926-.977-1.82-2.06.157-1.61.237-3.247.237-4.884Zm0 0v-.002V16Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#F5F5F8"
              d="M27.472 17.267c.344-.343.528-.819.528-1.267 0-.475-.184-.95-.528-1.294l-1.055-1.03a1.197 1.197 0 0 0-.845-.342 1.21 1.21 0 0 0-1.213 1.214v2.904a1.21 1.21 0 0 0 1.213 1.214c.29 0 .607-.105.845-.343l1.055-1.056Z"
            ></path>
          </svg>

          <br />
          <span>Acquired by Adobe</span>
          <br />
          <span>1.3 Bn cash deal</span>
        </>
      ),
      problem: "Too narrow (video-only)",
      problems: [
        {
          key: "Limited",
          summary: "Narrow focus on film production.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Vague",
          summary: "support for production management.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Limited",
          summary: "support for non-video media.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      title: "Collaboration Tools",
      size: 5.2,
      tam: "21 Bn",
      growth: 14,
      case: (
        <>
          <svg
            width="119"
            height="25"
            viewBox="0 0 119 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.8693 13.0848H43.6423V11.2935H36.8693V6.79229H44.3713V5.00098H34.8721V20.0016H44.4759V18.2103H36.8693V13.0848Z"
              fill="white"
            />
            <path
              d="M50.9549 18.2921C50.9124 18.4261 50.8732 18.4588 50.7457 18.4588C50.6182 18.4588 50.579 18.4261 50.5365 18.2921L47.4311 9.16553H45.5352V9.58067L49.1505 19.9984H52.3376L55.9529 9.58067V9.16553H54.057L50.9549 18.2921Z"
              fill="white"
            />
            <path
              d="M62.392 18.6876C60.0581 18.6876 58.9336 17.2722 58.7865 15.105H67.5175V14.0622C67.5175 11.0418 65.7262 8.85498 62.3495 8.85498C58.9729 8.85498 56.8906 11.0418 56.8906 14.5852C56.8906 18.1286 58.8683 20.3155 62.392 20.3155C65.8308 20.3155 67.2462 18.2104 67.56 16.5661H65.602C65.298 17.792 64.4154 18.6876 62.392 18.6876ZM62.3528 10.4796C64.5396 10.4796 65.5628 11.7283 65.6445 13.5425H58.8323C59.0611 11.542 60.3817 10.4796 62.3528 10.4796Z"
              fill="white"
            />
            <path
              d="M71.6848 10.6141C71.6423 10.7187 71.5998 10.7808 71.4756 10.7808C71.371 10.7808 71.3285 10.7383 71.3285 10.6337V9.16603H69.4521V19.9989H71.3285V13.8535C71.3285 11.7713 72.2862 10.9573 74.1004 10.9573H75.6008V9.12354H74.3913C72.9138 9.1268 72.1653 9.56156 71.6848 10.6141Z"
              fill="white"
            />
            <path
              d="M81.8516 18.6455C79.6648 18.6455 78.184 17.1876 78.184 14.5823C78.184 11.9771 79.6648 10.5192 81.8516 10.5192C83.9339 10.5192 84.8949 11.6011 85.0812 13.1244H87.0196C86.8954 10.833 85.0812 8.85205 81.8516 8.85205C78.6024 8.85205 76.2881 10.8951 76.2881 14.5823C76.2881 18.2696 78.5991 20.3126 81.8516 20.3126C85.1008 20.3126 86.9347 18.3317 87.1014 15.7297H85.163C85.0191 17.4393 83.9568 18.6455 81.8516 18.6455Z"
              fill="white"
            />
            <path
              d="M93.7502 8.85498C90.6252 8.85498 89.1673 10.4371 89.0823 12.4997H91.0207C91.0632 11.3752 91.8347 10.4796 93.7502 10.4796C95.6657 10.4796 96.4601 11.3752 96.4601 12.9181V13.5L92.5015 13.6667C89.7917 13.7811 88.543 14.9383 88.543 16.8113C88.543 18.8936 90.1153 20.3122 92.8023 20.3122C94.2503 20.3122 95.3454 19.8742 96.1267 18.8543C96.2116 18.7399 96.2509 18.7203 96.3359 18.7203C96.4209 18.7203 96.4601 18.7726 96.4601 18.8445V20.0017H98.2939V13.0227C98.2906 10.4371 96.8752 8.85498 93.7502 8.85498ZM96.4568 15.2096C96.4568 17.501 95.1035 18.6876 93.018 18.6876C91.3509 18.6876 90.4127 17.9587 90.4127 16.8113C90.4127 15.8732 91.0371 15.3109 92.495 15.2488L96.4535 15.0821V15.2096H96.4568Z"
              fill="white"
            />
            <path
              d="M105.822 13.804L104.279 13.5131C102.798 13.2319 102.154 12.9181 102.154 12.0225C102.154 11.1268 102.883 10.46 104.632 10.46C106.381 10.46 107.381 11.1268 107.528 12.6043H109.444C109.215 9.95984 107.195 8.85498 104.632 8.85498C102.069 8.85498 100.278 9.95984 100.278 12.0421C100.278 14.1243 101.746 14.8435 103.861 15.239L105.404 15.5299C106.904 15.811 107.653 16.1347 107.653 17.0728C107.653 18.011 106.904 18.7072 105.09 18.7072C103.279 18.7072 102.079 17.9587 101.913 16.5596H100.007C100.206 19.1028 102.298 20.309 105.09 20.309C107.881 20.309 109.529 19.1126 109.529 16.9649C109.532 14.8239 107.803 14.1766 105.822 13.804Z"
              fill="white"
            />
            <path
              d="M114.928 10.8329H118.053V9.1658H114.928V6.25H113.051V9.1658H110.551V10.8329H113.051V16.8737C113.051 18.9886 114.061 19.9987 116.176 19.9987H118.053V18.3316H117.324H115.228C115.124 18.3316 115.072 18.312 115.009 18.2499C114.947 18.1976 114.915 18.1257 114.915 18.0211C114.915 17.8118 114.924 17.3967 114.924 15.9388V10.8329H114.928Z"
              fill="white"
            />
            <path
              d="M0 25H22.5026V20.002H5.00131V5.00131H22.5026V0H0V25Z"
              fill="white"
            />
            <path
              d="M22.4173 9.53174H9.21777V14.8436H22.4173V9.53174Z"
              fill="white"
            />
          </svg>

          <br />
          <span>25 M Series A & 40K+ users</span>
          <br />
          <span>including major studios</span>
        </>
      ),
      problem: "Complex. Focused on film.",
      problems: [
        {
          key: "Restricted",
          summary: "to conferencing for live production.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Limited",
          summary: "storytelling & management tools.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Expensive:",
          summary: "$849 / month",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
  ];

  const initialValues = [
    market[0].size - 2,
    market[1].size - 4,
    market[2].size - 3,
  ];
  const initialValuesB = [
    market[0].growth - 3,
    market[1].growth - 8,
    market[2].growth - 4,
  ];

  let [values, setValues] = useState(initialValues);
  let [valuesB, setValuesB] = useState(initialValuesB);

  useEffect(() => {
    const currentHref = window.location.href;

    const currentSlide = currentHref.split("/").pop();

    const valuesNew = [market[0].size, market[1].size, market[2].size];
    const valuesBNew = [market[0].growth, market[1].growth, market[2].growth];

    setValues(currentSlide === "10" ? valuesNew : initialValues);
    setValuesB(currentSlide === "10" ? valuesBNew : initialValues);
  }, [window.location.href]);

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Competitive Landscape
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Key competitors in our target segments.
      </p>
      <div className="grid grid-cols-3 gap-8 items-start justify-start">
        {market.map((item, index) => (
          <div
            key={`market-${index}`}
            className="text-left mb-0 flex flex-col pt-4"
          >
            <div className="flex-col relative pb-4">
              <div className="flex flex-col">
                <div className="flex space-x-2">
                  <div className="font-bold text-[5.5rem] tracking-tight text-emerald-400 flex items-end leading-[0.9]">
                    <AnimatedNumber value={values[index]} />{" "}
                    <div className="text-5xl font-narrow font-semibold tracking-tight ml-0">
                      Bn
                    </div>
                  </div>
                  {item?.tam && (
                    <>
                      <div className="text-2xl font-narrow font-semibold tracking-tight text-slate-600 self-end mt-auto relative top-0.5">
                        TAM: {item.tam}
                      </div>
                    </>
                  )}
                </div>
                <div className="font-light text-5xl text-emerald-400 flex items-end leading-[0.9]">
                  <AnimatedNumber value={valuesB[index]} />{" "}
                  <div className="text-3xl font-narrow font-semibold tracking-tight ml-0">
                    % CAGR
                  </div>
                </div>
              </div>
            </div>
            <div className="text-2xl text-white font-narrow font-semibold leading-[0.9] uppercase tracking-tight relative pb-4">
              {item.title}
            </div>
            <div className="border-b border-dashed border-indigo-400 grow my-2"></div>
            <div className="text-lg leading-tight my-4 text-slate-400">
              {item.case}
            </div>
            <ol className="flex flex-col items-left mb-4 space-y-2">
              {item?.problems?.map((item, index) => (
                <li
                  key={`traction-${index}`}
                  className="text-xs text-slate-400 flex space-x-2 items-start"
                >
                  {item.icon}
                  <div>
                    <span className="text-white mr-1">{item.key}</span>
                    {item.summary}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
