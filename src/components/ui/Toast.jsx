/**
 * Toast Component
 *
 * Props:
 * message
 */

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-5 right-5 bg-green-700 text-white px-5 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}