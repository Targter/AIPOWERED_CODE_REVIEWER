import React from "react";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import styles from "./Page.module.css";

const Page = ({ selectedLanguage }) => {
  const [count, setCount] = useState(0);
  const [prompt, setCode] = useState(` //write a code to review
  function sum() {    
    return 1 + 1
  }`);

  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false); // Loading sta
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    if (!selectedLanguage) {
      alert("Please select a language");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL, {
        prompt,
        selectedLanguage,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      alert("An error occurred while fetching the review.");
    } finally {
      setLoading(false); // Stop loading
    }
  }
  const defaultLanguage = "javascript";

  // Determine the language to use
  const language = prism.languages[selectedLanguage]
    ? selectedLanguage
    : defaultLanguage;

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.code}>
          <Editor
            value={prompt}
            onValueChange={(prompt) => setCode(prompt)}
            highlight={(prompt) =>
              prism.highlight(prompt, prism.languages[language])
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button
          onClick={reviewCode}
          className={styles.review}
          disabled={loading}
        >
          {loading ? (
            <div className={styles.loadingAnimation}>
              {/* Add your loading animation here */}
              <span>Loading...</span>
            </div>
          ) : (
            "Review"
          )}
        </button>
      </div>
      <div className={styles.right}>
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  );
};

export default Page;
