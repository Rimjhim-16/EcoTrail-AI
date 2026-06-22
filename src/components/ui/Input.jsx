/**
 * Input Component
 *
 * Props:
 * label
 * placeholder
 * type
 * value
 * onChange
 * error
 */

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="block mb-2 font-medium text-gray-900 dark:text-white">{label}</label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
w-full
border
rounded-lg
px-4
py-2
bg-white
text-black
dark:bg-gray-800
dark:text-white
dark:border-gray-600
"
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
}