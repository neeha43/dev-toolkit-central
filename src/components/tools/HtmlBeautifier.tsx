import { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Maximize2, Minimize2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { html as beautifyHtml } from "js-beautify";

const HtmlBeautifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indentSize, setIndentSize] = useState(2);

  const beautify = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter some HTML to beautify",
        variant: "destructive",
      });
      return;
    }

    try {
      const formatted = beautifyHtml(input, {
        indent_size: indentSize,
        indent_char: " ",
        max_preserve_newlines: 1,
        preserve_newlines: true,
        wrap_line_length: 0,
        end_with_newline: true,
        indent_inner_html: true,
        indent_body_inner_html: true,
        indent_head_inner_html: true,
      });
      setOutput(formatted);
      toast({
        title: "Beautified!",
        description: "HTML has been formatted successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to beautify HTML\n\n${errorMessage}`);
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
        description: "Please enter some HTML to minify",
        variant: "destructive",
      });
      return;
    }

    try {
      // Simple HTML minification
      const minified = input
        .replace(/\n/g, "")
        .replace(/\s+/g, " ")
        .replace(/>\s+</g, "><")
        .replace(/<!--[\s\S]*?-->/g, "")
        .trim();
      setOutput(minified);
      toast({
        title: "Minified!",
        description: "HTML has been minified successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Failed to minify HTML\n\n${errorMessage}`);
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
          HTML Input
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="<html><head><title>Example</title></head><body><h1>Hello World</h1></body></html>"
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
      title="HTML Beautifier"
      description="Format and beautify HTML code with proper indentation"
      inputSection={inputSection}
      output={output}
      outputLabel="Formatted HTML"
    />
  );
};

export default HtmlBeautifier;
