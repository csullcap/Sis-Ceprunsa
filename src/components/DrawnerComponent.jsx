// drawner componen with tailwindcss

export default function DrawnerComponent({
  open,
  className,
  onClose,
  overlay,
  children,
}) {
  return (
    <>
      {overlay && (
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          } `}
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white transition-transform duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${className}`}
      >
        {children}
      </div>
    </>
  );
}
