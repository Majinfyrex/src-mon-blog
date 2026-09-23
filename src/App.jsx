import Header from './components/Header.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'
import articles from './data/articles'


function App() {

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Nav />
      <Header />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* on parcourt le tableau des articles pour afficher un composant Article pour chacun */}
          { articles.map((article) => (
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
