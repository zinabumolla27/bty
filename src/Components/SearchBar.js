import React, { useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import "./SearchBar.css"; // Your custom CSS file

const SearchBar = ({ onSearch }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Call the passed function with the search term
      setExpanded(false); // Optionally collapse after search
    }
  };

  const handleKeyPress = (e) => {
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
            onKeyPress={handleKeyPress}
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
