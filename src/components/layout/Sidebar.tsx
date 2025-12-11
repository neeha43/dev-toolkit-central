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
          onClick={() => window.open('https://buymeacoffee.com', '_blank')}
        >
          <Coffee className="w-4 h-4 mr-2" />
          Buy Me a Coffee
        </Button>
      </div>

      {/* AdSense Placeholder */}
      <div className="gradient-border flex-1 min-h-[300px] p-4">
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-muted-foreground">Ad</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Advertisement</p>
          <p className="text-xs text-muted-foreground/60">
            Google AdSense Placeholder
          </p>
          <div className="mt-4 px-3 py-2 bg-muted rounded-lg">
            <code className="text-xs text-muted-foreground">300x250</code>
          </div>
        </div>
      </div>

      {/* Second Ad Slot */}
      <div className="gradient-border min-h-[200px] p-4">
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
            <span className="text-lg font-bold text-muted-foreground">Ad</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Google AdSense Placeholder
          </p>
          <div className="mt-3 px-3 py-1.5 bg-muted rounded-lg">
            <code className="text-xs text-muted-foreground">300x200</code>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-destructive" /> for developers
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
