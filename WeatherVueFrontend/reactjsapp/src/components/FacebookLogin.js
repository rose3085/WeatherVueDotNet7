import React, { useState, useEffect } from "react";

// This function will make a POST request to initiate the Facebook login
const externalLogin = async (provider, returnUrl) => {
  debugger;
  const response = await fetch(
    "https://localhost:7194/api/Auth/externalLogin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = await response.json();
  console.log(result);
  if (result.url) {
    window.location.href = result.url; // Redirect to the external provider's login page
  } else {
    throw new Error("Invalid response from server");
  }
};

const FacebookLogin = () => {
  debugger;
  const [externalLogins, setExternalLogins] = useState([]);
  //const returnUrl = "https://localhost:3000/Login"; // Adjust as needed

  // Fetch the list of external logins from your backend (if needed)
  //   useEffect(() => {
  //     const fetchExternalLogins = async () => {
  //       const response = await fetch(
  //         "https://localhost:7194/api/Auth/externalLogins"
  //       );
  //       const logins = await response.json();
  //       setExternalLogins(logins);
  //     };

  //     fetchExternalLogins();
  //   }, []);

  const handleLogin = async () => {
    try {
      await externalLogin();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h1>Login with Facebook</h1>
      <button
        onClick={() => handleLogin()}
        className="btn btn-primary"
        title="Log in using your Facebook account"
      >
        Log in with Facebook
      </button>
    </div>
  );
};

export default FacebookLogin;
