import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Kreation from "./pages/Kreation";
import Projektanfrage from "./pages/Projektanfrage";
import UeberUns from "./pages/UeberUns";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/kreation" component={Kreation} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/projektanfrage" component={Projektanfrage} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster position="top-right" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
