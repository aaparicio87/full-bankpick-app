import { useState } from "react";

type PasswordVisible =
  | "currentPasswordVisible"
  | "newPasswordVisible"
  | "confirmPasswordVisible";

interface ChangePassword {
  currentPasswordVisible: boolean;
  newPasswordVisible: boolean;
  confirmPasswordVisible: boolean;
}

export const useChangePassword = () => {
  const [changePassword, setChangePassword] = useState<ChangePassword>({
    confirmPasswordVisible: false,
    newPasswordVisible: false,
    currentPasswordVisible: false,
  });

  const tooglePasswordVisibility = (key: PasswordVisible) => {
    setChangePassword((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return {
    tooglePasswordVisibility,
    changePassword,
  };
};
