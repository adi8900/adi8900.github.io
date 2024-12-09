export default function AboutLayout({ children }) {
    return (
      <div className="container">
        <h2 className="text-center text-success my-4">O mnie</h2>
        <div className="about-content">{children}</div>
      </div>
    );
  }