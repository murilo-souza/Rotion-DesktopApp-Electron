import {QueryClientProvider} from "@tanstack/react-query";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {queryClient} from "./lib/react-query";
import {Routes} from "./Routes";
import "./styles/global.css";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
