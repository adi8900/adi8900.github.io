export default function Favorite({ children }) {
    return (
      <div className="container">
        <h2 className="text-center text-danger my-4">Ulubiony Film</h2>
        <div className="favorite-movie-content">{children}</div>
      </div>
    );
  }
  