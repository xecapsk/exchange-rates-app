import AuthWrapper from "./components/auth/AuthWrapper";
import ExchangeRatesClient from "./components/ExchangeRates/ExchangeRatesClient";
import { UserComponent } from "./components/user/userComponent";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center mt-10">
      <AuthWrapper>
        <div className="p-4 w-[600px] bg-gradient-to-b from-white to-blue-300 p-6 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-5">Nedconvert</h1>
            <UserComponent />
          </div>
          <ExchangeRatesClient />
        </div>
      </AuthWrapper>
    </div>
  );
}
