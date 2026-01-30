import { useMemo } from "react";
import { TransactionAction } from "../types/transaction";

export const useHome = () => {
  const handleDeposit = () => {
    console.log("Deposit action triggered");
    // Navigate to deposit screen or open modal
  };

  const handleWithdraw = () => {
    console.log("Withdraw action triggered");
    // Navigate to withdraw screen or open modal
  };

  const handleTransfer = () => {
    console.log("Transfer action triggered");
  };

  const handlePayBill = () => {
    console.log("Pay bill action triggered");
  };

  const transactionActions: TransactionAction[] = useMemo(
    () => [
      {
        id: "deposit",
        icon: "ArrowDown",
        label: "Deposit",
        action: handleDeposit,
      },
      {
        id: "withdraw",
        icon: "ArrowUp",
        label: "Withdraw",
        action: handleWithdraw,
      },
      {
        id: "loan",
        icon: "CircleDollarSign",
        label: "Loan",
        action: handleTransfer,
      },
      {
        id: "top-up",
        icon: "CloudUpload",
        label: "Topup",
        action: handlePayBill,
      },
    ],
    [],
  );

  return {
    transactionActions,
  };
};
