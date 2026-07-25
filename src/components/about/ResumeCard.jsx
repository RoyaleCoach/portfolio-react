import { useState } from 'react'

export default function ResumeCard() {
  const [showPreview, setShowPreview] = useState(false)

  const pdfUrl = `${import.meta.env.BASE_URL}resume/RoyaleCoach_Software_Engineering_Portfolio.pdf`
  const docxUrl = `${import.meta.env.BASE_URL}resume/RoyaleCoach_Software_Engineering_Portfolio.docx`

  return (
    <div className="resume-card">
      {showPreview && (
        <div className="resume-preview-overlay" onClick={() => setShowPreview(false)}>
          <div className="resume-preview-modal" onClick={e => e.stopPropagation()}>
            <div className="resume-preview-header">
              <h3>Resume Preview</h3>
              <button
                className="resume-preview-close"
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="resume-preview-body">
              <iframe
                src={pdfUrl}
                title="Resume Preview"
                className="resume-preview-frame"
              />
            </div>
            <div className="resume-preview-actions">
              <a href={pdfUrl} download="RoyaleCoach_Software_Engineering_Portfolio.pdf" className="btn btn-primary btn-sm">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v8M4 6l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download PDF
              </a>
              <a href={docxUrl} download="RoyaleCoach_Software_Engineering_Portfolio.docx" className="btn btn-outline btn-sm">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v8M4 6l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download DOCX
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="resume-card-content">
        <div className="resume-card-info">
          <h3>Resume / CV</h3>
          <p>Professional resume showcasing skills, projects, and experience.</p>
          <div className="resume-card-meta">
            <span className="resume-card-format">PDF</span>
            <span className="resume-card-format">DOCX</span>
            <span className="resume-card-date">Updated 2026</span>
          </div>
        </div>
        <div className="resume-card-actions">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => setShowPreview(true)}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8s2-4 6-4 6 4 6 4-2 4-6 4-6-4-6-4z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Preview
          </button>
          <a href={pdfUrl} download="RoyaleCoach_Software_Engineering_Portfolio.pdf" className="btn btn-primary btn-sm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2v8M4 6l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download PDF
          </a>
          <a href={docxUrl} download="RoyaleCoach_Software_Engineering_Portfolio.docx" className="btn btn-outline btn-sm">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2v8M4 6l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            DOCX
          </a>
        </div>
      </div>
    </div>
  )
}
