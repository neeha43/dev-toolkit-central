import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Maximize2, Minimize2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { css as beautifyCss } from "js-beautify";

const CssBeautifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indentSize, setIndentSize] = useState(2);

  const beautify = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some CSS to beautify",
        variant: "destructive",
      });
      return;
    }

    try {
      const formatted = beautifyCss(input, {
        indent_size: indentSize,
        indent_char: " ",
        selector_separator_newline: true,
        newline_between_rules: true,
        end_with_newline: true,
      });
      setOutput(formatted);
      toast({
        title: "Beautified!",
        description: "CSS has been formatted successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to beautify CSS\n\n${errorMessage}`);
      toast({
        title: "Beautification failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const minify = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some CSS to minify",
        variant: "destructive",
      });
      return;
    }

    try {
      // Simple CSS minification
      const minified = input
        .replace(/\/\*[\s\S]*?\*\//g, "") // Remove comments
        .replace(/\s+/g, " ") // Collapse whitespace
        .replace(/\s*([{};:,>+~])\s*/g, "$1") // Remove spaces around special chars
        .replace(/;}/g, "}") // Remove last semicolon before }
        .trim();
      setOutput(minified);
      toast({
        title: "Minified!",
        description: "CSS has been minified successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to minify CSS\n\n${errorMessage}`);
      toast({
        title: "Minification failed",
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
          CSS Input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder=".container{display:flex;flex-direction:column;padding:20px}.header{background:#333;color:#fff}"
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
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="gradient" onClick={beautify}>
          <Maximize2 className="w-4 h-4" />
          Beautify
        </Button>
        <Button variant="tool" onClick={minify}>
          <Minimize2 className="w-4 h-4" />
          Minify
        </Button>
        <Button variant="outline" onClick={clearAll}>
          Clear
        </Button>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="CSS Beautifier"
      description="Format and beautify CSS code with proper indentation and spacing"
      inputSection={inputSection}
      output={output}
      outputLabel="Formatted CSS"
    />
  );
};

export default CssBeautifier;
