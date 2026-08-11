import { useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import NewsCard from "./NewsCard";
import Trending from "./Trending";
import Footer from "./Footer";

import newsData from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "AI",
    "Web Development",
    "Cyber Security",
    "Gaming",
    "Business",
  ];

  const featuredNews =
    newsData.find((news) => news.featured) || newsData[0];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      news.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || news.category === category;

    return matchesSearch && matchesCategory;
  });

  const trendingNews = newsData.filter(
    (news) => news.trending
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero news={featuredNews} />

        <section className="latest-section" id="latest">
          <div className="heading-row">
            <div>
              <span className="small-title">
                STAY UPDATED
              </span>

              <h1>Latest News</h1>
            </div>

            <div className="search-box">
              🔍
              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>
          </div>

          <div className="categories" id="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item ? "active" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="content-layout">
            <div className="news-grid">
              {filteredNews.length > 0 ? (
                filteredNews.map((news) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                  />
                ))
              ) : (
                <div className="no-news">
                  <h2>😔 No News Found</h2>
                  <p>
                    Try searching for something else.
                  </p>
                </div>
              )}
            </div>

            <Trending news={trendingNews.slice(0, 5)} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;