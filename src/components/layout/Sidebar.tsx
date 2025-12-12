import { Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-72 flex-shrink-0 hidden xl:flex flex-col gap-6 p-4">
      {/* Buy Me a Coffee */}
      <div className="gradient-border p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
            <Coffee className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">Support Us</h3>
            <p className="text-xs text-muted-foreground">Buy me a coffee</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full bg-warning/10 border-warning/30 text-warning hover:bg-warning/20 hover:text-warning"
          onClick={() => window.open('https://buymeacoffee.com/neeharikakv', '_blank')}
        >
          <Coffee className="w-4 h-4 mr-2" />
          Buy Me a Coffee
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
