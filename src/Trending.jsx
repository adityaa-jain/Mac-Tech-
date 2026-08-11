function Trending({ news }) {
  return (
    <aside className="trending">
      <div className="section-title">
        <h2>🔥 Trending</h2>
      </div>

      {news.map((item, index) => (
        <div className="trending-item" key={item.id}>
          <span className="trend-number">
            0{index + 1}
          </span>

          <div>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Trending;