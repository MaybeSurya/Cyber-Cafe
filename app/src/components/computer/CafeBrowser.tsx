"use client";
// src/components/computer/CafeBrowser.tsx
// Fictional period browser with address bar, tabs, and simulated search results.

import { useState } from "react";
import { browserSearchSuggestions } from "@/data/stories";
import CafeInput from "@/components/ui/CafeInput";
import CafeButton from "@/components/ui/CafeButton";
import styles from "./CafeBrowser.module.css";

export default function CafeBrowser() {
  const [activeTab, setActiveTab] = useState<"home" | "search" | "results">("home");
  const [query, setQuery] = useState("exam result 2014");
  const [searched, setSearched] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  const [resultFound, setResultFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setActiveTab("results");
  };

  const handleCheckResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNumber.trim()) {
      setResultFound(true);
    }
  };

  return (
    <div className={styles.browserContainer}>
      {/* Browser Tab Bar */}
      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${activeTab === "home" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className={`${styles.tab} ${activeTab === "search" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("search")}
        >
          Search Engine
        </button>
        <button
          className={`${styles.tab} ${activeTab === "results" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("results")}
        >
          Exam Portal
        </button>
      </div>

      {/* Address Bar */}
      <div className={styles.addressBar}>
        <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
          language
        </span>
        <input
          className={styles.addressInput}
          value={
            activeTab === "home"
              ? "http://www.cybernet.local/home"
              : activeTab === "search"
              ? "http://www.searchnet.co.in"
              : "http://results.board-exam.gov.in/2014"
          }
          readOnly
        />
      </div>

      {/* Main Browser Window Body */}
      <div className={styles.browserBody}>
        {activeTab === "home" && (
          <div className={styles.homeView}>
            <h2>WELCOME TO NET JUNCTION PORTAL</h2>
            <p>Select a service to begin browsing:</p>
            <div className={styles.homeGrid}>
              <button
                className={styles.homeCard}
                onClick={() => {
                  setQuery("exam result 2014");
                  setActiveTab("results");
                }}
              >
                <span className="material-symbols-outlined">assignment_turned_in</span>
                <span>Check Exam Results</span>
              </button>
              <button
                className={styles.homeCard}
                onClick={() => setActiveTab("search")}
              >
                <span className="material-symbols-outlined">search</span>
                <span>Web Search</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "search" && (
          <div className={styles.searchView}>
            <h2 className={styles.searchTitle}>SEARCH NET INDIA</h2>
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <CafeInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type query (e.g. exam result, song download)..."
              />
              <CafeButton type="submit">SEARCH</CafeButton>
            </form>
            <div className={styles.suggestions}>
              <p>Popular searches:</p>
              <div className={styles.tagGrid}>
                {browserSearchSuggestions.map((tag) => (
                  <button
                    key={tag}
                    className={styles.tag}
                    onClick={() => {
                      setQuery(tag);
                      setSearched(true);
                      setActiveTab("results");
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "results" && (
          <div className={styles.resultsView}>
            {!resultFound ? (
              <div className={styles.resultFormBox}>
                <h3>CENTRAL BOARD EXAMINATION RESULTS 2014</h3>
                <p>Enter your 7-digit Roll Number to view Senior Secondary result:</p>
                <form onSubmit={handleCheckResult} className={styles.rollForm}>
                  <CafeInput
                    label="ROLL NUMBER"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    placeholder="e.g. 6628104"
                    required
                  />
                  <CafeButton type="submit">SUBMIT & SEARCH</CafeButton>
                </form>
              </div>
            ) : (
              <div className={styles.resultCard}>
                <h3>RESULT FOUND - PASS</h3>
                <div className={styles.resultTable}>
                  <p><strong>Candidate:</strong> GUEST USER</p>
                  <p><strong>Roll No:</strong> {rollNumber}</p>
                  <p><strong>Status:</strong> PASS (FIRST DIVISION - 84.2%)</p>
                  <hr />
                  <p>ENGLISH CORE: 88</p>
                  <p>MATHEMATICS: 82</p>
                  <p>PHYSICS: 81</p>
                  <p>CHEMISTRY: 86</p>
                </div>
                <CafeButton onClick={() => setResultFound(false)}>
                  SEARCH ANOTHER
                </CafeButton>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
