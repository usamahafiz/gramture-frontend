import React, { useState, useEffect } from "react";
import "../assets/css/hero.css";
import heroImage from "../assets/images/heroimg.png";
import { FaSearch } from "react-icons/fa";
import { db } from "../config/firebase"; // ✅ your config path
import { collection, getDocs } from "firebase/firestore"; // ✅ import from SDK
 // Make sure path is correct

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allWords, setAllWords] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [topics, setTopics] = useState([]);

  // Extract all visible words from the DOM
  const extractTextWordsFromDOM = () => {
    const bodyText = document.body.innerText || "";
    const words = bodyText
      .split(/\s+/)
      .map((w) => w.replace(/[^a-zA-Z]/g, "").toLowerCase())
      .filter((w) => w.length > 2);
    const uniqueWords = [...new Set(words)];
    setAllWords(uniqueWords);
  };

  // Fetch topics from Firebase
  const fetchTopicsFromFirebase = async () => {
    try {
      const topicsRef = collection(db, "topics");
      const snapshot = await getDocs(topicsRef);
      const topicList = snapshot.docs.map((doc) => doc.data());
      setTopics(topicList);
    } catch (err) {
      console.error("Error fetching topics:", err);
    }
  };

  useEffect(() => {
    extractTextWordsFromDOM();
    fetchTopicsFromFirebase();
  }, []);

  // Highlight matched word in DOM
  const highlightWordInDOM = (targetWord) => {
    document.querySelectorAll(".search-target").forEach((el) => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.innerText), el);
      parent.normalize();
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const regex = new RegExp(`\\b(${targetWord})\\b`, "i");

    let node;
    while ((node = walker.nextNode())) {
      const match = node.nodeValue.match(regex);
      if (match) {
        const span = document.createElement("span");
        span.className = "search-target high";
        span.textContent = match[0];

        const before = node.nodeValue.slice(0, match.index);
        const after = node.nodeValue.slice(match.index + match[0].length);

        const beforeNode = document.createTextNode(before);
        const afterNode = document.createTextNode(after);

        const parent = node.parentNode;
        parent.replaceChild(afterNode, node);
        parent.insertBefore(span, afterNode);
        parent.insertBefore(beforeNode, span);

        span.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => span.classList.remove("highlight"), 2000);
        break;
      }
    }
  };

  // Handle input change and show suggestions
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.length > 1) {
      const textMatches = allWords
        .filter((word) => word.includes(value))
        .slice(0, 5);

      const topicMatches = topics
        .filter((topic) => topic.name.toLowerCase().includes(value))
        .slice(0, 5)
        .map((topic) => ({ name: topic.name, url: topic.url, isTopic: true }));

      const mergedSuggestions = [
        ...textMatches.map((word) => ({ name: word, isTopic: false })),
        ...topicMatches,
      ];

      setSuggestions(mergedSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle click on suggestion (either highlight or open topic)
  const handleSuggestionClick = (item) => {
    setSearchTerm(item.name);
    setSuggestions([]);
    if (item.isTopic) {
      window.open(item.url, "_blank");
    } else {
      highlightWordInDOM(item.name);
    }
  };

  return (
    <section className="hero mt-5 mb-3">
      <div className="hero-content">
        <h1>
          Learn <span style={{ color: "grey" }}>today.</span>{" "}
          <span style={{ color: "grey" }}>Lead</span> tomorrow
        </h1>
        <p>
          Gramture is a transformative platform for students seeking to learn efficiently and excel academically.
        </p>

        <div className="btn-contact">
        <button class="contact-btn">Contact Now</button>
        </div>

        {/* <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search any word or topic..."
          />
          <button
            className="search-bton"
            onClick={() => {
              const match = suggestions.find((s) => s.name === searchTerm);
              if (match) handleSuggestionClick(match);
              else highlightWordInDOM(searchTerm);
            }}
          >
            Continue
          </button>

          {suggestions.length > 0 && (
            <ul className="suggestion-list">
              {suggestions.map((item, idx) => (
                <li key={idx} onClick={() => handleSuggestionClick(item)}>
                  {item.isTopic ? `📘 ${item.name}` : item.name}
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;






