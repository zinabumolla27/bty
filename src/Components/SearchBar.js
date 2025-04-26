import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import "./SearchBar.css";

const SearchBar = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  // Handle click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setExpanded(false);
        setQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search function
  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const searchResults = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value.toLowerCase())
      )
    );
    setResults(searchResults);
  };

  const toggleSearch = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
      }, 100);
    } else {
      setQuery("");
      setResults([]);
    }
  };

  return (
    <div
      className={`search-container ${expanded ? "expanded" : ""}`}
      ref={searchRef}
    >
      {expanded ? (
        <div className="search-expanded">
          <Input
            id="search-input"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={toggleSearch}
            className="close-btn"
          />
          {results.length > 0 && (
            <div className="search-results">
              {results.map((item, index) => (
                <a
                  key={index}
                  href={item.url || "#"}
                  className="result-item"
                  onClick={() => {
                    setExpanded(false);
                    setQuery("");
                    setResults([]);
                  }}
                >
                  <div className="result-title">{item.title || "Untitled"}</div>
                  {item.description && (
                    <div className="result-description">{item.description}</div>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Button
          type="text"
          icon={<SearchOutlined />}
          onClick={toggleSearch}
          className="search-icon-btn"
        />
      )}
    </div>
  );
};

export default SearchBar;
