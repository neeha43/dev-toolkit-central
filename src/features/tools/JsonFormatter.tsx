import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { FileJson, Minimize2, Maximize2, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indentSize, setIndentSize] = useState(2);

  const formatJson = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some JSON to format",
        variant: "destructive",
      });
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indentSize);
      setOutput(formatted);
      toast({
        title: "Formatted!",
        description: "JSON has been formatted successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Invalid JSON\n\n${errorMessage}`);
      toast({
        title: "Invalid JSON",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const minifyJson = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some JSON to minify",
        variant: "destructive",
      });
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      toast({
        title: "Minified!",
        description: "JSON has been minified successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Invalid JSON\n\n${errorMessage}`);
      toast({
        title: "Invalid JSON",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const validateJson = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some JSON to validate",
        variant: "destructive",
      });
      return;
    }

    try {
      JSON.parse(input);
      setOutput("✅ Valid JSON!");
      toast({
        title: "Valid JSON",
        description: "Your JSON is valid",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`❌ Invalid JSON\n\n${errorMessage}`);
      toast({
        title: "Invalid JSON",
        description: errorMessage,
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
          JSON Input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name": "John", "age": 30}'
          className="code-textarea w-full h-64 scrollbar-thin"
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-muted-foreground">
          Indent Size:
        </label>
        <select
          value={indentSize}
          onChange={(e) => setIndentSize(Number(e.target.value))}
          className="input-field py-2 px-3"
        >
          <option value={2}>2 spaces</option>
          <option value={4}>4 spaces</option>
          <option value={1}>1 tab</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="gradient" onClick={formatJson}>
          <Maximize2 className="w-4 h-4" />
          Format
        </Button>
        <Button variant="tool" onClick={minifyJson}>
          <Minimize2 className="w-4 h-4" />
          Minify
        </Button>
        <Button variant="tool" onClick={validateJson}>
          <AlertCircle className="w-4 h-4" />
          Validate
        </Button>
        <Button variant="outline" onClick={clearAll}>
          Clear
        </Button>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format, minify, and validate JSON data with syntax highlighting"
      inputSection={inputSection}
      output={output}
      outputLabel="Formatted JSON"
    />
  );
};

export default JsonFormatter;
