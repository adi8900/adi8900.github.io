export default function InterestsLayout({ children }) {
    return (
      <div className="container">
        <h2 className="text-center text-info my-4">Moje Zainteresowania</h2>
        <div className="interests-content">{children}</div>
      </div>
    );
  }
  