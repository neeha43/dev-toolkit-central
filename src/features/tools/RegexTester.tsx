import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Search, Flag } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const RegexTester = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [output, setOutput] = useState("");

  const testRegex = () => {
    if (!pattern.trim()) {
      toast({
        title: "Empty pattern",
        description: "Please enter a regex pattern",
        variant: "destructive",
      });
      return;
    }

    if (!testString.trim()) {
      toast({
        title: "Empty test string",
        description: "Please enter a string to test",
        variant: "destructive",
      });
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const matches = testString.match(regex);

      let result = "";

      if (matches && matches.length > 0) {
        result += `✅ ${matches.length} match${matches.length > 1 ? "es" : ""} found\n\n`;
        result += "Matches:\n";
        matches.forEach((match, index) => {
          result += `  ${index + 1}. "${match}"\n`;
        });

        // Show match positions
        result += "\nPositions:\n";
        let match;
        const regexWithG = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
        let matchIndex = 0;
        while ((match = regexWithG.exec(testString)) !== null) {
          matchIndex++;
          result += `  ${matchIndex}. Index ${match.index}: "${match[0]}"\n`;
          if (match.index === regexWithG.lastIndex) {
            regexWithG.lastIndex++;
          }
        }

        // Show groups if any
        const groupRegex = new RegExp(pattern, flags.replace("g", ""));
        const groupMatch = testString.match(groupRegex);
        if (groupMatch && groupMatch.length > 1) {
          result += "\nCapture Groups:\n";
          for (let i = 1; i < groupMatch.length; i++) {
            result += `  Group ${i}: "${groupMatch[i] || ""}"\n`;
          }
        }
      } else {
        result = "❌ No matches found";
      }

      setOutput(result);
      toast({
        title: matches ? "Matches found!" : "No matches",
        description: matches ? `Found ${matches.length} match(es)` : "Pattern doesn't match the test string",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: Invalid regex pattern\n\n${errorMessage}`);
      toast({
        title: "Invalid regex",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const replaceMatches = () => {
    const replacement = prompt("Enter replacement string (use $1, $2 for groups):");
    if (replacement === null) return;

    try {
      const regex = new RegExp(pattern, flags);
      const result = testString.replace(regex, replacement);
      setOutput(`Replaced result:\n\n${result}`);
      toast({
        title: "Replaced!",
        description: "Matches have been replaced",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setOutput(`Error: ${errorMessage}`);
      toast({
        title: "Replace failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const clearAll = () => {
    setPattern("");
    setTestString("");
    setOutput("");
    setFlags("g");
  };

  const toggleFlag = (flag: string) => {
    if (flags.includes(flag)) {
      setFlags(flags.replace(flag, ""));
    } else {
      setFlags(flags + flag);
    }
  };

  const inputSection = (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Regex Pattern
        </label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">/</span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern..."
            className="input-field flex-1"
          />
          <span className="text-muted-foreground">/</span>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            className="input-field w-16 text-center"
            placeholder="flags"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <label className="text-sm font-medium text-muted-foreground w-full mb-1">
          Flags:
        </label>
        {[
          { flag: "g", label: "Global", desc: "Find all matches" },
          { flag: "i", label: "Case Insensitive", desc: "Ignore case" },
          { flag: "m", label: "Multiline", desc: "^ and $ match line boundaries" },
          { flag: "s", label: "Dotall", desc: ". matches newlines" },
        ].map(({ flag, label, desc }) => (
          <Button
            key={flag}
            variant={flags.includes(flag) ? "default" : "tool"}
            size="sm"
            onClick={() => toggleFlag(flag)}
            title={desc}
          >
            <Flag className="w-3 h-3" />
            {label}
          </Button>
        ))}
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Test String
        </label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against the pattern..."
          className="code-textarea w-full h-40 scrollbar-thin"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="gradient" onClick={testRegex}>
          <Search className="w-4 h-4" />
          Test
        </Button>
        <Button variant="tool" onClick={replaceMatches}>
          Replace
        </Button>
        <Button variant="outline" onClick={clearAll}>
          Clear
        </Button>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test and debug regular expressions with real-time matching and capture groups"
      inputSection={inputSection}
      output={output}
      outputLabel="Results"
    />
  );
};

export default RegexTester;
