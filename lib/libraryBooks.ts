export type LibraryBook = {
  title: string;
  author: string;
  category: string;
};

// All titles below are public-domain classics. We link to a stable
// Gutenberg search query per title rather than a hardcoded ebook ID —
// IDs can be wrong or move, search queries don't break.
export const books: LibraryBook[] = [
  { title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Classic Literature' },
  { title: "Alice's Adventures in Wonderland", author: 'Lewis Carroll', category: 'Classic Literature' },
  { title: 'Frankenstein', author: 'Mary Shelley', category: 'Classic Literature' },
  { title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', category: 'Classic Literature' },
  { title: 'Moby-Dick', author: 'Herman Melville', category: 'Classic Literature' },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens', category: 'Classic Literature' },
  { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', category: 'Classic Literature' },
  { title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', category: 'Classic Literature' },
  { title: 'Great Expectations', author: 'Charles Dickens', category: 'Classic Literature' },
  { title: 'Dracula', author: 'Bram Stoker', category: 'Classic Literature' },
  { title: 'Treasure Island', author: 'Robert Louis Stevenson', category: 'Classic Literature' },
  { title: "Grimm's Fairy Tales", author: 'The Brothers Grimm', category: 'Classic Literature' },
  { title: "A Doll's House", author: 'Henrik Ibsen', category: 'Classic Literature' },
  { title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', category: 'Classic Literature' },
  { title: 'The War of the Worlds', author: 'H. G. Wells', category: 'Classic Literature' },
  { title: 'The Time Machine', author: 'H. G. Wells', category: 'Classic Literature' },
  { title: 'Little Women', author: 'Louisa May Alcott', category: 'Classic Literature' },
  { title: 'Jane Eyre', author: 'Charlotte Bronte', category: 'Classic Literature' },
  { title: 'Wuthering Heights', author: 'Emily Bronte', category: 'Classic Literature' },
  { title: 'Emma', author: 'Jane Austen', category: 'Classic Literature' },
  { title: 'Sense and Sensibility', author: 'Jane Austen', category: 'Classic Literature' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', category: 'Classic Literature' },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', category: 'Classic Literature' },
  { title: 'War and Peace', author: 'Leo Tolstoy', category: 'Classic Literature' },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', category: 'Classic Literature' },
  { title: 'Don Quixote', author: 'Miguel de Cervantes', category: 'Classic Literature' },
  { title: 'The Odyssey', author: 'Homer', category: 'Classic Literature' },
  { title: 'The Iliad', author: 'Homer', category: 'Classic Literature' },
  { title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy' },
  { title: 'The Republic', author: 'Plato', category: 'Philosophy' },
  { title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', category: 'Philosophy' },
  { title: 'The Prince', author: 'Niccolo Machiavelli', category: 'Philosophy' },
  { title: 'Walden', author: 'Henry David Thoreau', category: 'Philosophy' },
  { title: 'The Art of War', author: 'Sun Tzu', category: 'Philosophy' },
  { title: 'Common Sense', author: 'Thomas Paine', category: 'History & Politics' },
  { title: 'The Federalist Papers', author: 'Hamilton, Madison, Jay', category: 'History & Politics' },
  { title: 'Democracy in America', author: 'Alexis de Tocqueville', category: 'History & Politics' },
  { title: 'The Wealth of Nations', author: 'Adam Smith', category: 'Economics' },
  { title: 'Utilitarianism', author: 'John Stuart Mill', category: 'Philosophy' },
  { title: 'On Liberty', author: 'John Stuart Mill', category: 'Philosophy' },
  { title: 'The Origin of Species', author: 'Charles Darwin', category: 'Science' },
  { title: 'Relativity: The Special and General Theory', author: 'Albert Einstein', category: 'Science' },
  { title: 'Micrographia', author: 'Robert Hooke', category: 'Science' },
  { title: 'Flatland', author: 'Edwin A. Abbott', category: 'Science' },
  { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', category: "Children's" },
  { title: 'Peter Pan', author: 'J. M. Barrie', category: "Children's" },
  { title: 'The Jungle Book', author: 'Rudyard Kipling', category: "Children's" },
  { title: 'Anne of Green Gables', author: 'L. M. Montgomery', category: "Children's" },
  { title: 'Black Beauty', author: 'Anna Sewell', category: "Children's" },
  { title: "Aesop's Fables", author: 'Aesop', category: "Children's" },
  { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', category: 'Classic Literature' },
  { title: 'The Three Musketeers', author: 'Alexandre Dumas', category: 'Classic Literature' },
  { title: 'Les Miserables', author: 'Victor Hugo', category: 'Classic Literature' },
  { title: 'The Hunchback of Notre-Dame', author: 'Victor Hugo', category: 'Classic Literature' },
  { title: 'Around the World in Eighty Days', author: 'Jules Verne', category: 'Classic Literature' },
  { title: 'Twenty Thousand Leagues Under the Sea', author: 'Jules Verne', category: 'Classic Literature' },
  { title: 'The Strange Case of Dr Jekyll and Mr Hyde', author: 'Robert Louis Stevenson', category: 'Classic Literature' },
  { title: 'Heart of Darkness', author: 'Joseph Conrad', category: 'Classic Literature' },
  { title: 'The Metamorphosis', author: 'Franz Kafka', category: 'Classic Literature' },
  { title: 'Siddhartha', author: 'Hermann Hesse', category: 'Classic Literature' },
];

export function gutenbergSearchUrl(title: string) {
  return `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(title)}`;
}
