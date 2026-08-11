function Hero({ news }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">🔥 Featured News</span>

        <h1>{news.title}</h1>

        <p>{news.description}</p>

        <div className="hero-info">
          <span>👤 {news.author}</span>
          <span>📅 {news.date}</span>
          <span>⏱️ {news.readTime}</span>
        </div>

        <button className="read-btn">
          Read Full Story →
        </button>
      </div>

      <div className="hero-image">
        <img src={news.image} alt={news.title} />
      </div>
    </section>
  );
}

export default Hero;