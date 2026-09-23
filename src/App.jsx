import { useState } from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'
import articles from './data/articles'


function App() {

  // ce que l'utilisateur tape dans la barre de recherche
  const [search, setSearch] = useState("")

  // on garde seulement les articles qui contiennent la recherche
  // dans le titre, les mots clés (tags), les catégories ou le texte
  const filteredArticles = articles.filter((article) => {
    const recherche = search.toLowerCase()

    const dansTitre = article.title.toLowerCase().includes(recherche)
    const dansTexte = article.text.toLowerCase().includes(recherche)
    const dansCategories = article.categories.some((categorie) => categorie.toLowerCase().includes(recherche))
    const dansTags = article.tags.some((tag) => tag.name.toLowerCase().includes(recherche))

    return dansTitre || dansTexte || dansCategories || dansTags
  })

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Nav />
      <Header />

      <div className="max-w-6xl mx-auto px-4">
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full border rounded px-3 py-2 mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        { filteredArticles.length === 0 && (
          <p className="text-center text-gray-500">Aucun article trouvé</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* on parcourt le tableau des articles pour afficher un composant Article pour chacun */}
          { filteredArticles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              img={article.img}
              text={article.text}
              categories={article.categories}
              tags={article.tags}
            />
          ))}
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
