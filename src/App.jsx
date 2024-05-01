import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Card from "./components/OverviewCard";
import DispalyBar from "./components/DispalyBar";
import Header from "./components/Header";
import OverviewCard from "./components/OverviewCard";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  const [isModalOpen, setIsModelOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Header />
        <div className="">
          <OverviewCard
            isFormOpen={isModalOpen}
            setIsFormOpen={setIsModelOpen}
          />
          <DispalyBar isFormOpen={isModalOpen} setIsFormOpen={setIsModelOpen} />
        </div>
        <Toaster />
      </SignedIn>
    </QueryClientProvider>
  );
}

export default App;
