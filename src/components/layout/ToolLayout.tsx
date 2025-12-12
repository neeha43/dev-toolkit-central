import { ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ToolLayoutProps {
  title: string;
  description: string;
  inputSection: ReactNode;
  output: string;
  outputLabel?: string;
}

const ToolLayout = ({
  title,
  description,
  inputSection,
  output,
  outputLabel = "Output",
}: ToolLayoutProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!output) {
      toast({
        title: "Nothing to copy",
        description: "Generate some output first",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Output copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{title}</h2>
        <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="gradient-border p-3 sm:p-5">
            {inputSection}
          </div>
        </div>

        {/* Output Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="gradient-border p-3 sm:p-5 flex flex-col h-full min-h-[200px] sm:min-h-0">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <label className="text-xs sm:text-sm font-medium text-muted-foreground">
                {outputLabel}
              </label>
              <Button
                variant="tool"
                size="sm"
                onClick={handleCopy}
                disabled={!output}
                className="text-xs sm:text-sm px-2 sm:px-3"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline ml-1">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline ml-1">Copy</span>
                  </>
                )}
              </Button>
            </div>
            <div className="output-box flex-1 scrollbar-thin whitespace-pre-wrap break-all text-xs sm:text-sm">
              {output || (
                <span className="text-muted-foreground/50 italic">
                  Output will appear here...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
