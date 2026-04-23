import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1c1007', borderTop: '1px solid rgba(203,176,119,0.18)' }}>
      <div className="px-5 py-8">
        <p style={{ color: '#fff', fontSize: '14px' }}>
          © 2025 NVS Wealth. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
