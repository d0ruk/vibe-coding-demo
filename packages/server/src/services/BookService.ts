import { Book } from "../entities/Book";

export const BookService = {
  async createBook(data: Partial<Book>) {
    const book = Book.create(data);
    return await book.save();
  },

  async deleteBook(isbn: string) {
    await Book.delete({ isbn });
  },

  async updateBook(isbn: string, updates: Partial<Book>) {
    await Book.update({ isbn }, updates);
    return await Book.findOneBy({ isbn });
  },

  async listBooks() {
    return await Book.find();
  },

  async getBook(isbn: string) {
    return await Book.findOneBy({ isbn });
  },
};
