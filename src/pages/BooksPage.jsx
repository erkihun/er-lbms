import BookList from "../components/books/BookList";

const BooksPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Book Management
        </h1>
        <p className="text-gray-600">Manage your library's book inventory</p>
      </div>
      <BookList />
    </div>
  );
};

export default BooksPage;
