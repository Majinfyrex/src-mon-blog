// On vérifie si l'information existe et si elle existe on la parcours avec .map()
// { tags && tags.map( ...

// Plus rapide d'écriture
// { tags?.map( ... 

// La propriété key permet à react d'identifier chaque élément d'une liste pour gérer les mise à jour du DOM

function Article({title, img, text, categories, tags}) {
    return (
        <div>
            <div className="border rounded h-full">
                <div className="bloc-img">
                    <img src={img.src} className="w-full h-48 object-cover" alt={img.alt} />
                </div>
                <div className="p-3">
                    <h2 className="text-2xl font-semibold my-3">{title}</h2>
                    { categories && categories.map((name, index) => (
                        <a href={"/keyword/" + name} className="inline-block border border-gray-800 rounded px-2 py-1 mr-2 mb-2 text-sm" key={index}>{name}</a>
                    ) )}
                    <hr className="my-2" />
                    { tags && tags.map((tag) => (
                        <a href={`/tag/${tag.slug}`} className="inline-block bg-gray-800 text-white rounded px-2 py-1 mr-2 mb-2 text-sm" key={tag.id}>{tag.name}</a>
                    ) )}
                    <hr className="my-2" />
                    <p>
                        {text}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Article
