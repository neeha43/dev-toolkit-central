import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { RefreshCw, Plus, Hash } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const UuidGenerator = () => {
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(1);
  const [format, setFormat] = useState<"standard" | "uppercase" | "no-dashes">("standard");
  const [version, setVersion] = useState<"v4" | "v1-like">("v4");

  const generateUuidV4 = (): string => {
    // RFC 4122 version 4 UUID
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const generateUuidV1Like = (): string => {
    // Pseudo v1-like UUID (time-based simulation)
    const now = Date.now();
    const timeHex = now.toString(16).padStart(12, "0");
    const random = () => Math.floor(Math.random() * 16).toString(16);

    return [
      timeHex.slice(0, 8),
      timeHex.slice(8, 12),
      "1" + random() + random() + random(),
      ((Math.random() * 4) | 8).toString(16) + random() + random() + random(),
      Array(12).fill(0).map(random).join(""),
    ].join("-");
  };

  const formatUuid = (uuid: string): string => {
    switch (format) {
      case "uppercase":
        return uuid.toUpperCase();
      case "no-dashes":
        return uuid.replace(/-/g, "");
      default:
        return uuid;
    }
  };

  const generate = () => {
    const uuids: string[] = [];
    const generator = version === "v4" ? generateUuidV4 : generateUuidV1Like;

    for (let i = 0; i < count; i++) {
      uuids.push(formatUuid(generator()));
    }

    setOutput(uuids.join("\n"));
    toast({
      title: "Generated!",
      description: `Generated ${count} UUID${count > 1 ? "s" : ""}`,
    });
  };

  const generateNil = () => {
    setOutput("00000000-0000-0000-0000-000000000000");
    toast({
      title: "Nil UUID generated",
      description: "All zeros UUID",
    });
  };

  const clearAll = () => {
    setOutput("");
  };

  const inputSection = (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          UUID Version
        </label>
        <select
          value={version}
          onChange={(e) => setVersion(e.target.value as "v4" | "v1-like")}
          className="input-field w-full"
        >
          <option value="v4">Version 4 (Random)</option>
          <option value="v1-like">Version 1-like (Time-based)</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Format
        </label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as "standard" | "uppercase" | "no-dashes")}
          className="input-field w-full"
        >
          <option value="standard">Standard (lowercase with dashes)</option>
          <option value="uppercase">Uppercase (with dashes)</option>
          <option value="no-dashes">No dashes</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Count: {count}
        </label>
        <input
          type="range"
          min="1"
          max="100"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground">
        <strong>UUID v4:</strong> Random UUID, most commonly used.
        <br />
        <strong>UUID v1-like:</strong> Time-based, useful for ordering.
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="gradient" onClick={generate}>
          <RefreshCw className="w-4 h-4" />
          Generate
        </Button>
        <Button variant="tool" onClick={generateNil}>
          <Hash className="w-4 h-4" />
          Nil UUID
        </Button>
        <Button variant="outline" onClick={clearAll}>
          Clear
        </Button>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate universally unique identifiers (UUIDs) in various formats"
      inputSection={inputSection}
      output={output}
      outputLabel="Generated UUIDs"
    />
  );
};

export default UuidGenerator;
