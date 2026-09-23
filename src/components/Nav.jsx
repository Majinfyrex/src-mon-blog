function Nav() {
  return (
    <nav className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a className="text-white text-xl font-bold" href="#">Mon Blog</a>
          <div>
            <a className="text-gray-300 hover:text-white" aria-current="page" href="#">Accueil</a>
          </div>
        </div>
      </nav>
  )
}

export default Nav
