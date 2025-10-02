export default function Button({
  children,
  hasImg = false,
  bgCyan = true,
  styles = "",
}) {
  return (
    <button
      className={`${
        bgCyan ? "bg-[#00ADB5]" : "bg-[#393E46BF]/75"
      } py-2.5 px-8 rounded-3xl font-bold hover:cursor-pointer ${styles}`}
    >
      <span className={`drop-shadow-lg/50 ${hasImg && "flex gap-2.5"}`}>
        {children}
      </span>
    </button>
  );
}
