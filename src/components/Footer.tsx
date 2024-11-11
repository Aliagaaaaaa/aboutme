export function Footer() {
  return (
    <footer className="p-6 text-center text-xs xs:text-sm sm:text-base text-gray-500">
      © {new Date().getFullYear()}
    </footer>
  );
}