import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  )
}