import { Suspense } from "react";
import PaymentPage from "./components/PaymentPageClient";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentPage />
    </Suspense>
  );
}
