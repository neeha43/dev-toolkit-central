import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Pipette, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ColorPicker = () => {
  const [color, setColor] = useState("#00d4ff");
  const [output, setOutput] = useState("");

  const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgbToCmyk = (r: number, g: number, b: number): { c: number; m: number; y: number; k: number } => {
    if (r === 0 && g === 0 && b === 0) {
      return { c: 0, m: 0, y: 0, k: 100 };
    }

    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;
    const k = Math.min(c, m, y);

    return {
      c: Math.round(((c - k) / (1 - k)) * 100),
      m: Math.round(((m - k) / (1 - k)) * 100),
      y: Math.round(((y - k) / (1 - k)) * 100),
      k: Math.round(k * 100),
    };
  };

  const updateOutput = (hexColor: string) => {
    const rgb = hexToRgb(hexColor);
    if (!rgb) {
      setOutput("Invalid color");
      return;
    }

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

    const formats = [
      `HEX: ${hexColor.toUpperCase()}`,
      `RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      `RGBA: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      `HSL: hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      `HSLA: hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)`,
      `CMYK: cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`,
      "",
      "CSS Variables:",
      `--color: ${hexColor};`,
      `--color-rgb: ${rgb.r}, ${rgb.g}, ${rgb.b};`,
      `--color-hsl: ${hsl.h}, ${hsl.s}%, ${hsl.l}%;`,
    ];

    setOutput(formats.join("\n"));
  };

  useEffect(() => {
    updateOutput(color);
  }, [color]);

  const generateRandom = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(randomColor);
    toast({
      title: "Random color!",
      description: randomColor.toUpperCase(),
    });
  };

  const handleHexInput = (value: string) => {
    // Ensure it starts with #
    if (!value.startsWith("#")) {
      value = "#" + value;
    }
    setColor(value);
  };

  const presetColors = [
    "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7",
    "#dfe6e9", "#00b894", "#6c5ce7", "#fd79a8", "#e17055",
    "#00cec9", "#0984e3", "#b2bec3", "#2d3436", "#ffffff",
  ];

  const inputSection = (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Color Picker
        </label>
        <div className="flex gap-3 items-center">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-20 h-20 rounded-lg cursor-pointer border border-border"
          />
          <div
            className="flex-1 h-20 rounded-lg border border-border"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          HEX Value
        </label>
        <input
          type="text"
          value={color}
          onChange={(e) => handleHexInput(e.target.value)}
          placeholder="#000000"
          className="input-field w-full"
          maxLength={7}
        />
      </div>

      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Preset Colors
        </label>
        <div className="flex flex-wrap gap-2">
          {presetColors.map((presetColor) => (
            <button
              key={presetColor}
              onClick={() => setColor(presetColor)}
              className="w-8 h-8 rounded-md border border-border hover:scale-110 transition-transform"
              style={{ backgroundColor: presetColor }}
              title={presetColor}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="gradient" onClick={generateRandom}>
          <RefreshCw className="w-4 h-4" />
          Random
        </Button>
      </div>
    </div>
  );

  return (
    <ToolLayout
      title="Color Picker"
      description="Pick colors and convert between HEX, RGB, HSL, and CMYK formats"
      inputSection={inputSection}
      output={output}
      outputLabel="Color Formats"
    />
  );
};

export default ColorPicker;
