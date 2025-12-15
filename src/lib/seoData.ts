// Centralized SEO data for all tools

export interface ToolSEOData {
  id: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  canonicalPath: string;
  keywords: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const toolsSEOData: ToolSEOData[] = [
  {
    id: "json",
    title: "JSON Formatter & Validator",
    metaTitle: "JSON Formatter & Validator - Free Online Tool | DevTools",
    description: "Format, validate, and beautify your JSON data with proper indentation and syntax highlighting.",
    metaDescription: "Free online JSON formatter and validator. Format, beautify, and validate JSON data instantly. No signup required, works in your browser.",
    canonicalPath: "/json-formatter",
    keywords: "JSON formatter, JSON validator, JSON beautifier, format JSON online, validate JSON, pretty print JSON",
    faqs: [
      {
        question: "What is a JSON formatter?",
        answer: "A JSON formatter is a tool that takes raw JSON data and formats it with proper indentation and line breaks, making it easier to read and understand the structure of the data."
      },
      {
        question: "How do I validate JSON online?",
        answer: "Simply paste your JSON data into our JSON formatter tool and click Format. The tool will automatically validate your JSON and highlight any syntax errors."
      },
      {
        question: "Is my data safe when using this JSON formatter?",
        answer: "Yes, all processing happens locally in your browser. Your data is never sent to any server or stored anywhere."
      }
    ]
  },
  {
    id: "base64",
    title: "Base64 Encoder & Decoder",
    metaTitle: "Base64 Encoder & Decoder - Free Online Tool | DevTools",
    description: "Encode and decode Base64 strings instantly in your browser.",
    metaDescription: "Free online Base64 encoder and decoder. Convert text to Base64 and decode Base64 strings instantly. No data stored, works offline.",
    canonicalPath: "/base64-encoder",
    keywords: "Base64 encoder, Base64 decoder, encode Base64, decode Base64, Base64 converter, Base64 online",
    faqs: [
      {
        question: "What is Base64 encoding?",
        answer: "Base64 is an encoding scheme that converts binary data into ASCII text format. It's commonly used to transmit data over media designed for text."
      },
      {
        question: "When should I use Base64 encoding?",
        answer: "Base64 is useful for embedding images in HTML/CSS, sending binary data in JSON, and transmitting data through systems that only support text."
      }
    ]
  },
  {
    id: "url",
    title: "URL Encoder & Decoder",
    metaTitle: "URL Encoder & Decoder - Free Online Tool | DevTools",
    description: "Encode and decode URLs with special characters safely.",
    metaDescription: "Free online URL encoder and decoder. Safely encode special characters in URLs and decode percent-encoded strings. Works instantly in your browser.",
    canonicalPath: "/url-encoder",
    keywords: "URL encoder, URL decoder, percent encoding, encode URL, decode URL, URI encoder",
    faqs: [
      {
        question: "What is URL encoding?",
        answer: "URL encoding replaces unsafe characters with a '%' followed by two hexadecimal digits. This ensures URLs are transmitted correctly over the internet."
      },
      {
        question: "Which characters need to be URL encoded?",
        answer: "Characters like spaces, &, =, ?, #, and non-ASCII characters need to be encoded when used in URLs to prevent them from being misinterpreted."
      }
    ]
  },
  {
    id: "regex",
    title: "Regex Tester & Validator",
    metaTitle: "Regex Tester & Validator - Free Online Tool | DevTools",
    description: "Test and debug regular expressions with real-time matching and highlighting.",
    metaDescription: "Free online regex tester and debugger. Test regular expressions with real-time matching, highlighting, and explanation. Supports JavaScript regex.",
    canonicalPath: "/regex-tester",
    keywords: "regex tester, regular expression tester, regex validator, regex debugger, test regex online, regex matcher",
    faqs: [
      {
        question: "What is a regular expression?",
        answer: "A regular expression (regex) is a sequence of characters that defines a search pattern. It's used for pattern matching, validation, and text manipulation."
      },
      {
        question: "How do I test a regex pattern?",
        answer: "Enter your regex pattern in the pattern field and your test string in the text area. Matches will be highlighted in real-time as you type."
      }
    ]
  },
  {
    id: "uuid",
    title: "UUID Generator",
    metaTitle: "UUID Generator - Free Online Tool | DevTools",
    description: "Generate random UUIDs (v4) instantly with one click.",
    metaDescription: "Free online UUID generator. Generate random UUID v4 identifiers instantly. Copy to clipboard with one click. No data stored.",
    canonicalPath: "/uuid-generator",
    keywords: "UUID generator, generate UUID, UUID v4, random UUID, GUID generator, unique identifier",
    faqs: [
      {
        question: "What is a UUID?",
        answer: "A UUID (Universally Unique Identifier) is a 128-bit identifier that is guaranteed to be unique across all devices and time. UUID v4 uses random numbers."
      },
      {
        question: "When should I use UUIDs?",
        answer: "UUIDs are commonly used as database primary keys, session identifiers, file names, and any situation where you need a unique identifier without coordination."
      }
    ]
  },
  {
    id: "color",
    title: "Color Picker & Converter",
    metaTitle: "Color Picker & Converter - Free Online Tool | DevTools",
    description: "Pick colors and convert between HEX, RGB, and HSL formats.",
    metaDescription: "Free online color picker and converter. Convert colors between HEX, RGB, and HSL formats. Visual color picker with instant conversion.",
    canonicalPath: "/color-picker",
    keywords: "color picker, color converter, HEX to RGB, RGB to HEX, HSL converter, color tool",
    faqs: [
      {
        question: "What color formats are supported?",
        answer: "Our color picker supports HEX (e.g., #FF5733), RGB (e.g., rgb(255, 87, 51)), and HSL (e.g., hsl(11, 100%, 60%)) color formats."
      },
      {
        question: "How do I convert HEX to RGB?",
        answer: "Simply enter your HEX color code in the input field or use the color picker. The RGB and HSL values will be automatically calculated and displayed."
      }
    ]
  },
  {
    id: "html",
    title: "HTML Beautifier & Formatter",
    metaTitle: "HTML Beautifier & Formatter - Free Online Tool | DevTools",
    description: "Format and beautify HTML code with proper indentation.",
    metaDescription: "Free online HTML beautifier and formatter. Format messy HTML code with proper indentation and line breaks. Works instantly in your browser.",
    canonicalPath: "/html-beautifier",
    keywords: "HTML beautifier, HTML formatter, format HTML, beautify HTML, HTML pretty print, HTML indentation",
    faqs: [
      {
        question: "What does an HTML beautifier do?",
        answer: "An HTML beautifier formats HTML code by adding proper indentation, line breaks, and spacing, making the code easier to read and maintain."
      },
      {
        question: "Will beautifying HTML affect how my page looks?",
        answer: "No, beautifying HTML only changes the formatting of the code, not its functionality. Your webpage will look exactly the same."
      }
    ]
  },
  {
    id: "css",
    title: "CSS Beautifier & Formatter",
    metaTitle: "CSS Beautifier & Formatter - Free Online Tool | DevTools",
    description: "Format and beautify CSS code with proper indentation.",
    metaDescription: "Free online CSS beautifier and formatter. Format minified or messy CSS code with proper indentation. Works instantly, no data stored.",
    canonicalPath: "/css-beautifier",
    keywords: "CSS beautifier, CSS formatter, format CSS, beautify CSS, CSS pretty print, unminify CSS",
    faqs: [
      {
        question: "How do I unminify CSS?",
        answer: "Paste your minified CSS into our CSS beautifier and click Format. The tool will add proper indentation and line breaks to make it readable."
      },
      {
        question: "Can I customize the indentation?",
        answer: "Our CSS beautifier uses standard 2-space indentation which is the most common convention for CSS formatting."
      }
    ]
  },
  {
    id: "js",
    title: "JavaScript Beautifier & Formatter",
    metaTitle: "JavaScript Beautifier & Formatter - Free Online Tool | DevTools",
    description: "Format and beautify JavaScript code with proper indentation.",
    metaDescription: "Free online JavaScript beautifier and formatter. Format minified or messy JS code with proper indentation. Works instantly in your browser.",
    canonicalPath: "/js-beautifier",
    keywords: "JavaScript beautifier, JS formatter, format JavaScript, beautify JS, JS pretty print, unminify JavaScript",
    faqs: [
      {
        question: "What is a JavaScript beautifier?",
        answer: "A JavaScript beautifier formats JS code by adding proper indentation, line breaks, and spacing, making minified or messy code readable and maintainable."
      },
      {
        question: "Can I beautify minified JavaScript?",
        answer: "Yes, our JS beautifier can format minified JavaScript code into a readable format with proper indentation and line breaks."
      }
    ]
  },
  {
    id: "timestamp",
    title: "Unix Timestamp Converter",
    metaTitle: "Unix Timestamp Converter - Free Online Tool | DevTools",
    description: "Convert between Unix timestamps and human-readable dates.",
    metaDescription: "Free online Unix timestamp converter. Convert timestamps to dates and dates to timestamps instantly. Supports seconds and milliseconds.",
    canonicalPath: "/timestamp-converter",
    keywords: "Unix timestamp converter, timestamp to date, date to timestamp, epoch converter, Unix time, timestamp calculator",
    faqs: [
      {
        question: "What is a Unix timestamp?",
        answer: "A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC). It's a standard way to represent time in computing."
      },
      {
        question: "How do I convert a timestamp to a date?",
        answer: "Enter your Unix timestamp in the input field and the tool will instantly convert it to a human-readable date and time in your local timezone."
      }
    ]
  }
];

export const getToolSEOData = (toolId: string): ToolSEOData | undefined => {
  return toolsSEOData.find(tool => tool.id === toolId);
};

export const homepageSEO = {
  title: "DevTools - Free Online Developer Utilities",
  metaTitle: "DevTools - Free Online Developer Utilities | JSON, Base64, Regex & More",
  description: "Free online developer tools including JSON formatter, Base64 encoder, URL encoder, regex tester, UUID generator, color picker, and code beautifiers.",
  metaDescription: "Free online developer tools. Format JSON, encode Base64, test regex, generate UUIDs, pick colors, and beautify code. No signup, works in your browser.",
  keywords: "developer tools, JSON formatter, Base64 encoder, URL encoder, regex tester, UUID generator, color picker, HTML beautifier, CSS beautifier, JavaScript beautifier, timestamp converter, free dev tools",
  canonicalPath: "/"
};

export const aboutPageSEO = {
  title: "About DevTools - Free Developer Utilities",
  metaTitle: "About DevTools - Free Online Developer Utilities",
  description: "Learn about DevTools, a comprehensive collection of free online developer utilities designed to make your coding life easier.",
  metaDescription: "DevTools provides free online developer utilities. All tools run in your browser with no data stored. Fast, private, and works offline.",
  keywords: "about DevTools, developer tools, free tools, online utilities, coding tools",
  canonicalPath: "/about"
};

export const contactPageSEO = {
  title: "Contact DevTools",
  metaTitle: "Contact DevTools - Get in Touch",
  description: "Have questions, suggestions, or feedback? Contact the DevTools team.",
  metaDescription: "Contact the DevTools team. We'd love to hear your questions, suggestions, and feedback about our free developer tools.",
  keywords: "contact DevTools, developer tools support, feedback",
  canonicalPath: "/contact"
};

export const privacyPageSEO = {
  title: "Privacy Policy - DevTools",
  metaTitle: "Privacy Policy - DevTools",
  description: "Read about how DevTools handles your privacy. All tools run locally in your browser with no data stored.",
  metaDescription: "DevTools privacy policy. Learn how we protect your privacy. All tools run locally in your browser - no data is stored or transmitted.",
  keywords: "DevTools privacy policy, privacy, data protection",
  canonicalPath: "/privacy"
};
