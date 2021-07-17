import React, { FC, memo, useCallback } from "react";

export const Login: FC = memo(() => {
  const handleAuth = useCallback(() => {}, []);

  return (
    <div className="login-page">
      <div className="login-page-title">Log In</div>
      <div className="login-page-form">
        <button onClick={handleAuth}>Enter</button>
      </div>
    </div>
  );
});
