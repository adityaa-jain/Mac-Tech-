function NewsCard({ news }) {
  return (
    <article className="news-card">
      <div className="image-container">
        <img src={news.image} alt={news.title} />

        <span className="category-badge">
          {news.category}
        </span>
      </div>

      <div className="card-content">
        <h2>{news.title}</h2>

        <p>{news.description}</p>

        <div className="card-footer">
          <div>
            <strong>{news.author}</strong>
            <small>
              {news.date} • {news.readTime}
            </small>
          </div>

          <button>→</button>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;