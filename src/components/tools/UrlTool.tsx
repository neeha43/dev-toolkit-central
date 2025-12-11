import { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Link, Link2Off } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const UrlTool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [encodeMode, setEncodeMode] = useState<"component" | "full">("component");

  const encode = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some text to encode",
        variant: "destructive",
      });
      return;
    }

    try {
      const encoded = encodeMode === "component" 
        ? encodeURIComponent(input)
        : encodeURI(input);
      setOutput(encoded);
      toast({
        title: "Encoded!",
        description: "Text has been URL encoded",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to encode\n\n${errorMessage}`);
      toast({
        title: "Encoding failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const decode = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some URL encoded text to decode",
        variant: "destructive",
      });
      return;
    }

    try {
      const decoded = encodeMode === "component"
        ? decodeURIComponent(input)
        : decodeURI(input);
      setOutput(decoded);
      toast({
        title: "Decoded!",
        description: "URL encoded text has been decoded",
      });
    } catch (error) {
      setOutput("Error: Invalid URL encoded string\n\nMake sure your input is properly URL encoded.");
      toast({
        title: "Decoding failed",
        description: "Invalid URL encoded string",
        variant: "destructive",
      });
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  const inputSection = (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Text / URL Input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text or URL to encode/decode..."
          className="code-textarea w-full h-64 scrollbar-thin"
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-muted-foreground">
          Mode:
        </label>
        <select
          value={encodeMode}
          onChange={(e) => setEncodeMode(e.target.value as "component" | "full")}
          className="input-field py-2 px-3"
        >
          <option value="component">Component (encodeURIComponent)</option>
          <option value="full">Full URL (encodeURI)</option>
        </select>
      </div>

      <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground">
        <strong>Tip:</strong> Use "Component" for encoding query parameters or fragments. 
        Use "Full URL" to encode an entire URL while preserving special characters like :, /, ?, &.
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="gradient" onClick={encode}>
          <Link className="w-4 h-4" />
          Encode
        </Button>
        <Button variant="tool" onClick={decode}>
          <Link2Off className="w-4 h-4" />
          Decode
        </Button>
        <Button variant="outline" onClick={clearAll}>
          Clear
        </Button>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="URL Encoder/Decoder"
      description="Encode and decode URL components for safe transmission in URLs"
      inputSection={inputSection}
      output={output}
      outputLabel="Result"
    />
  );
};

export default UrlTool;
