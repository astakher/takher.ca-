import site from '../content/site.json'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} {site.footer.name}
        </span>
        <span>{site.footer.right}</span>
      </div>
    </footer>
  )
}
