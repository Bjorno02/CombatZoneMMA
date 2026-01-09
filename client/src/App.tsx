import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import EventsPage from "@/pages/events";
import AboutPage from "@/pages/about";
import FightersPage from "@/pages/fighters";
import MediaPage from "@/pages/media";
import ShopPage from "@/pages/shop";
import SponsorsPage from "@/pages/sponsors";
import ContactPage from "@/pages/contact";
import VIPPage from "@/pages/vip";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events" component={EventsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/fighters" component={FightersPage} />
      <Route path="/media" component={MediaPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sponsors" component={SponsorsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/vip" component={VIPPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

