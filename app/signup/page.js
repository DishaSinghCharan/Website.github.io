// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import LoginForm from "../components/LoginForm"; // Correct path to the LoginForm component

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = () => {
//     // Perform authentication logic here (e.g., API request to check credentials)
//     const isAuthenticated = true; // For demo purposes, assume login is successful.

//     if (isAuthenticated) {
//       router.push("/home"); // Redirect to home after successful login
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <Header />

//       <main className="flex-grow flex flex-col items-center justify-center p-4">
//         <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             Login to FAM4U
//           </h2>

//           {/* LoginForm component will have similar structure as ProfileSelector */}
//           <LoginForm
//             email={email}
//             setEmail={setEmail}
//             password={password}
//             setPassword={setPassword}
//             handleLogin={handleLogin}
//           />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
