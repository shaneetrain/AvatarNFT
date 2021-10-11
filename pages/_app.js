import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <header>
                    <Navbar />
                </header>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
