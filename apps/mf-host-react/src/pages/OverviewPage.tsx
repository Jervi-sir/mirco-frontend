const remotes = [
  ['products', 'React remote exposing ProductList, ProductCard, ProductFilters'],
  ['cart', 'Vue remote mounted inside React via a federated module'],
  ['admin', 'React remote exposing operational dashboards'],
]

export function OverviewPage() {
  return (
    <section className="page-grid">
      <div className="panel">
        <p className="section-label">Level 2-4</p>
        <h2>What this host is training</h2>
        <ul className="stack-list">
          <li>Runtime component loading with React.lazy and Suspense</li>
          <li>Cross-framework integration by mounting a Vue widget in React</li>
          <li>Error boundaries, retries, and health-check based diagnostics</li>
          <li>Independent remote builds served from different ports</li>
        </ul>
      </div>
      <div className="panel">
        <p className="section-label">Remote map</p>
        <h2>Federated modules</h2>
        <ul className="stack-list">
          {remotes.map(([name, description]) => (
            <li key={name}>
              <strong>{name}</strong>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
