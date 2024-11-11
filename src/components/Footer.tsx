export function Footer() {
  return (
    <footer className="mt-6 sm:mt-8 md:mt-10 text-center text-xs xs:text-sm sm:text-base text-gray-500">
      © {new Date().getFullYear()}
    </footer>
  );
}