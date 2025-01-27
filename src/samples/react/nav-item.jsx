export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md ${isActive ? 'bg-blue-500 text-white' : 'bg-zinc-50'}`}
      >
        {children}
      </a>
    </li>
  )
}
