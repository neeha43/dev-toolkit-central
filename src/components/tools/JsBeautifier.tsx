import { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Maximize2, Minimize2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { js as beautifyJs } from "js-beautify";

const JsBeautifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indentSize, setIndentSize] = useState(2);

  const beautify = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some JavaScript to beautify",
        variant: "destructive",
      });
      return;
    }

    try {
      const formatted = beautifyJs(input, {
        indent_size: indentSize,
        indent_char: " ",
        max_preserve_newlines: 2,
        preserve_newlines: true,
        keep_array_indentation: false,
        break_chained_methods: false,
        space_before_conditional: true,
        unescape_strings: false,
        jslint_happy: false,
        end_with_newline: true,
        wrap_line_length: 0,
        indent_empty_lines: false,
        comma_first: false,
        e4x: false,
        indent_level: 0,
      });
      setOutput(formatted);
      toast({
        title: "Beautified!",
        description: "JavaScript has been formatted successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to beautify JavaScript\n\n${errorMessage}`);
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
        description: "Please enter some JavaScript to minify",
        variant: "destructive",
      });
      return;
    }

    try {
      // Basic JS minification (not production-grade, just for demo)
      const minified = input
        .replace(/\/\/.*$/gm, "") // Remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, "") // Remove multi-line comments
        .replace(/\s+/g, " ") // Collapse whitespace
        .replace(/\s*([{};:,=+\-*/<>!&|()])\s*/g, "$1") // Remove spaces around operators
        .replace(/;\s*}/g, "}") // Remove semicolon before }
        .trim();
      setOutput(minified);
      toast({
        title: "Minified!",
        description: "JavaScript has been minified (basic minification)",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to minify JavaScript\n\n${errorMessage}`);
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
          JavaScript Input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="function hello(){const name='World';console.log('Hello, '+name+'!');return name;}"
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

      <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground">
        <strong>Note:</strong> The minification is basic and meant for preview purposes. 
        For production, use dedicated tools like Terser or UglifyJS.
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
      title="JavaScript Beautifier"
      description="Format and beautify JavaScript code with proper indentation"
      inputSection={inputSection}
      output={output}
      outputLabel="Formatted JavaScript"
    />
  );
};

export default JsBeautifier;
