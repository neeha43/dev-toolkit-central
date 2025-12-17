import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ToolLayout from "@/components/layout/ToolLayout";
import { Clock, RefreshCw, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [output, setOutput] = useState("");
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const convertTimestamp = () => {
    if (!timestamp.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter a timestamp",
        variant: "destructive",
      });
      return;
    }

    try {
      let ts = parseInt(timestamp);

      // Handle seconds vs milliseconds
      if (ts.toString().length === 10) {
        ts = ts * 1000; // Convert seconds to milliseconds
      }

      const date = new Date(ts);

      if (isNaN(date.getTime())) {
        throw new Error("Invalid timestamp");
      }

      const formats = [
        `Timestamp: ${timestamp}`,
        `Milliseconds: ${ts}`,
        `Seconds: ${Math.floor(ts / 1000)}`,
        "",
        "Date Formats:",
        `ISO 8601: ${date.toISOString()}`,
        `UTC: ${date.toUTCString()}`,
        `Local: ${date.toLocaleString()}`,
        `Date only: ${date.toLocaleDateString()}`,
        `Time only: ${date.toLocaleTimeString()}`,
        "",
        "Components:",
        `Year: ${date.getFullYear()}`,
        `Month: ${date.getMonth() + 1} (${date.toLocaleString('en', { month: 'long' })})`,
        `Day: ${date.getDate()}`,
        `Hour: ${date.getHours()}`,
        `Minute: ${date.getMinutes()}`,
        `Second: ${date.getSeconds()}`,
        `Day of Week: ${date.toLocaleString('en', { weekday: 'long' })}`,
      ];

      setOutput(formats.join("\n"));
      toast({
        title: "Converted!",
        description: "Timestamp has been converted",
      });
    } catch (error) {
      setOutput("Error: Invalid timestamp\n\nPlease enter a valid Unix timestamp (seconds or milliseconds)");
      toast({
        title: "Invalid timestamp",
        description: "Please enter a valid timestamp",
        variant: "destructive",
      });
    }
  };

  const convertDate = () => {
    if (!dateInput.trim()) {
      toast({
        title: "Empty input",
        description: "Please enter a date",
        variant: "destructive",
      });
      return;
    }

    try {
      const date = new Date(dateInput);

      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }

      const ts = date.getTime();

      const formats = [
        `Input: ${dateInput}`,
        "",
        "Timestamps:",
        `Milliseconds: ${ts}`,
        `Seconds: ${Math.floor(ts / 1000)}`,
        "",
        "Date Formats:",
        `ISO 8601: ${date.toISOString()}`,
        `UTC: ${date.toUTCString()}`,
        `Local: ${date.toLocaleString()}`,
      ];

      setOutput(formats.join("\n"));
      toast({
        title: "Converted!",
        description: "Date has been converted to timestamp",
      });
    } catch (error) {
      setOutput("Error: Invalid date\n\nPlease enter a valid date string");
      toast({
        title: "Invalid date",
        description: "Please enter a valid date",
        variant: "destructive",
      });
    }
  };

  const useCurrentTime = () => {
    setTimestamp(Date.now().toString());
    toast({
      title: "Current time set",
      description: "Using current timestamp",
    });
  };

  const clearAll = () => {
    setTimestamp("");
    setDateInput("");
    setOutput("");
  };

  const inputSection = (
    <div className="flex flex-col gap-4">
      {/* Current Time Display */}
      <div className="bg-muted/50 rounded-lg p-4 text-center border border-border">
        <p className="text-xs text-muted-foreground mb-1">Current Unix Timestamp</p>
        <p className="text-2xl font-mono text-primary">{currentTime}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {new Date(currentTime).toLocaleString()}
        </p>
      </div>

      {/* Timestamp Input */}
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Unix Timestamp
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="1702300800 or 1702300800000"
            className="input-field flex-1"
          />
          <Button variant="tool" size="icon" onClick={useCurrentTime} title="Use current time">
            <Clock className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Supports both seconds and milliseconds
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="gradient" onClick={convertTimestamp} className="flex-1">
          <RefreshCw className="w-4 h-4" />
          Convert Timestamp
        </Button>
      </div>

      <div className="border-t border-border pt-4">
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Date/Time Input
        </label>
        <input
          type="datetime-local"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          className="input-field w-full"
        />
      </div>

      <div className="flex gap-2">
        <Button variant="tool" onClick={convertDate} className="flex-1">
          <Calendar className="w-4 h-4" />
          Convert Date to Timestamp
        </Button>
      </div>

      <Button variant="outline" onClick={clearAll}>
        Clear All
      </Button>
    </div>
  );

  return (
    <ToolLayout
      title="Timestamp Converter"
      description="Convert between Unix timestamps and human-readable dates"
      inputSection={inputSection}
      output={output}
      outputLabel="Converted Result"
    />
  );
};

export default TimestampConverter;
