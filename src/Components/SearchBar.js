import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      if (typeof onSearch === "function") {
        onSearch(searchTerm);
      } else {
        console.error("onSearch is not a function");
      }
      setExpanded(false);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`search-container ${expanded ? "expanded" : ""}`}>
      {expanded ? (
        <div className="search-expanded">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} // Use onKeyDown instead of onKeyPress
            className="search-input"
            autoFocus
          />
          <Button
            type="text"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            className="search-button"
          />
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => {
              setExpanded(false);
              setSearchTerm("");
            }}
            className="close-button"
          />
        </div>
      ) : (
        <Button
          type="text"
          icon={<SearchOutlined />}
          onClick={() => setExpanded(true)}
          className="search-icon-button"
        />
      )}
    </div>
  );
};

export default SearchBar;
