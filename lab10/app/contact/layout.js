export default function ContactLayout({ children }) {
    return (
      <div className="container">
        <h2 className="text-center text-warning my-4">Kontakt</h2>
        <div className="contact-content">{children}</div>
      </div>
    );
  }