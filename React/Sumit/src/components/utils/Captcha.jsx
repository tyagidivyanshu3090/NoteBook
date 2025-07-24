import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, IconButton } from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

// CaptchaComponent definition
const Captcha = ({ onCaptchaGenerated }) => {
  const [captcha, setCaptcha] = useState(""); // Stores the generated CAPTCHA string
  const canvasRef = useRef(null); // Ref for the canvas element

  // Function to generate a new complex CAPTCHA string using a specific character set
  // This useCallback dependency includes onCaptchaGenerated, so it needs to be stable.
  const generateCaptcha = useCallback(() => {
    // The specified complex character set for the CAPTCHA
    const characters =
      "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789@#$%&*^";
    let result = "";
    const length = 7; // Increased length for higher complexity

    // Generate CAPTCHA string by randomly picking characters from the set
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(result); // Update the CAPTCHA state
    // Call the callback to send the generated captcha to the parent
    if (onCaptchaGenerated) {
      onCaptchaGenerated(result);
    }
  }, [onCaptchaGenerated]); // onCaptchaGenerated must be stable

  // useEffect hook to generate a CAPTCHA when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]); // Dependency on generateCaptcha to ensure it runs when generateCaptcha itself changes

  // useEffect hook to draw on the canvas whenever the CAPTCHA string changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas element exists

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure context is available

    // Set canvas dimensions - adjusted for side-by-side display
    canvas.width = 180;
    canvas.height = 45;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the CAPTCHA text
    ctx.font = "24px Arial"; // Slightly smaller font
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Add some random rotation and offset for each character to make it harder to read programmatically
    captcha.split("").forEach((char, index) => {
      const x = (index + 0.5) * (canvas.width / captcha.length);
      // Increased vertical offset range for more "random fasting" feel
      const y = canvas.height / 2 + (Math.random() * 12 - 6); // Slight vertical offset (-6 to +6)
      // Increased rotation range for more "random fasting" feel
      const angle = Math.random() * 0.4 - 0.2; // Small rotation in radians (-0.2 to +0.2)

      ctx.save(); // Save the current canvas state
      ctx.translate(x, y); // Move to the character's position
      ctx.rotate(angle); // Apply rotation
      ctx.fillText(char, 0, 0); // Draw the character
      ctx.restore(); // Restore the canvas state
    });

    // Draw random lines to add noise - Increased number and variability for "random fasting"
    const numLines = 25; // More lines to add more noise
    for (let i = 0; i < numLines; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      // Random color and transparency with wider range
      ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${0.1 + Math.random() * 0.6})`; // 0.1 to 0.7 opacity
      ctx.lineWidth = Math.random() * 2 + 0.5; // Line width between 0.5 and 2.5
      ctx.stroke();
    }
    // Draw random dots (noise) - Increased number and variability for "random fasting"
    const numDots = 80; // More dots
    for (let i = 0; i < numDots; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2, // Larger dot size variation
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${0.3 + Math.random() * 0.6})`; // 0.3 to 0.9 opacity
      ctx.fill();
    }
  }, [captcha]); // Redraw when CAPTCHA changes

  // Function to speak the CAPTCHA text using Web Speech API
  const speakCaptcha = () => {
    // Check if the browser supports the Web Speech API
    if ("speechSynthesis" in window) {
      // Create a new SpeechSynthesisUtterance object with the CAPTCHA text
      // We join characters with a space to make them pronounced individually
      const utterance = new SpeechSynthesisUtterance(
        captcha.split("").join(" ")
      );
      utterance.rate = 0.8; // Set speech rate to be slightly slower for better clarity
      speechSynthesis.speak(utterance); // Speak the utterance
    } else {
      // Log a message if text-to-speech is not supported
      console.log("Text-to-speech not supported in this browser.");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: 1 }}>
      {/* Canvas for drawing distorted lines and text */}
      <canvas
        style={{
          backgroundColor: "#f0f0f0", // Light gray background
          borderRadius: "4px",
          border: "1px solid #ccc", // Light border
          flexShrink: 0, // Prevent shrinking
          height: "40px",
        }}
        ref={canvasRef}
      ></canvas>
      <Box sx={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* IconButton to trigger speaking the CAPTCHA */}
        <IconButton
          onClick={speakCaptcha}
          aria-label="speak captcha"
          size="small"
        >
          <VolumeUpIcon fontSize="small" sx={{ color: "#ff9933" }} />
        </IconButton>
        {/* IconButton to trigger generating a new CAPTCHA */}
        <IconButton
          onClick={generateCaptcha}
          color="secondary"
          aria-label="refresh captcha"
          size="small"
        >
          <RefreshIcon fontSize="small" sx={{ color: "#000080" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Captcha;
