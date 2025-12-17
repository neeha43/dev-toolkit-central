import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Lock, Unlock, FileText, Image } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"text" | "file">("text");

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
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
      toast({
        title: "Encoded!",
        description: "Text has been encoded to Base64",
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
        description: "Please enter some Base64 to decode",
        variant: "destructive",
      });
      return;
    }

    try {
      // Remove any whitespace and newlines
      const cleanInput = input.replace(/\s/g, "");
      const decoded = decodeURIComponent(escape(atob(cleanInput)));
      setOutput(decoded);
      toast({
        title: "Decoded!",
        description: "Base64 has been decoded to text",
      });
    } catch (error) {
      setOutput("Error: Invalid Base64 string\n\nMake sure your input is valid Base64 encoded data.");
      toast({
        title: "Decoding failed",
        description: "Invalid Base64 string",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Extract base64 from data URL
      const base64 = result.split(",")[1];
      setOutput(base64);
      toast({
        title: "File encoded!",
        description: `${file.name} has been encoded to Base64`,
      });
    };
    reader.onerror = () => {
      toast({
        title: "File read error",
        description: "Failed to read the file",
        variant: "destructive",
      });
    };
    reader.readAsDataURL(file);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  const inputSection = (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button
          variant={mode === "text" ? "default" : "tool"}
          size="sm"
          onClick={() => setMode("text")}
        >
          <FileText className="w-4 h-4" />
          Text
        </Button>
        <Button
          variant={mode === "file" ? "default" : "tool"}
          size="sm"
          onClick={() => setMode("file")}
        >
          <Image className="w-4 h-4" />
          File
        </Button>
      </div>

      {mode === "text" ? (
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Text / Base64 Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to encode or Base64 to decode..."
            className="code-textarea w-full h-64 scrollbar-thin"
          />
        </div>
      ) : (
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Upload File
          </label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              <Image className="w-10 h-10 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">
                Click to upload a file
              </span>
              <span className="text-muted-foreground/60 text-xs">
                Supports any file type
              </span>
            </label>
          </div>
        </div>
      )}

      {mode === "text" && (
        <div className="flex flex-wrap gap-2">
          <Button variant="gradient" onClick={encode}>
            <Lock className="w-4 h-4" />
            Encode
          </Button>
          <Button variant="tool" onClick={decode}>
            <Unlock className="w-4 h-4" />
            Decode
          </Button>
          <Button variant="outline" onClick={clearAll}>
            Clear
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <ToolLayout
      title="Base64 Encoder/Decoder"
      description="Encode text or files to Base64 and decode Base64 back to original content"
      inputSection={inputSection}
      output={output}
      outputLabel="Result"
    />
  );
};

export default Base64Tool;
