/* eslint-disable jsx-a11y/alt-text */
import data from './data'

function App() {
  return (
    <div>
      <header className="bg-slate-900 p-5">
        <a href="/" className="text-slate-100 font-bold">Tukupedia</a>
      </header>
      <main className="p-4 w-full min-h-screen px-10 py-5 bg-teal-200">
        <h1>Featured Products</h1>
        <div className="grid mt-5 grid-flow-row gap-3 justify-center justify-items-center lg:grid-cols-6 md:grid-cols-4 grid-cols-2 bg-slate-400">
          {data.products.map((product) => (
            <div className="flex">
              <div key={product.slug} className="bg-yellow-400 rounded-md max-w-sm overflow-hidden shadow-md" >
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} className="rounded-t-md w-full" />
                </a>
                <div className="p-4">
                  <a href={`/product/${product.slug}`}>
                    <p className="overvlow-ellipsis overflow-hidden break-keep whitespace-pre-wrap">{product.name}</p>
                  </a>
                  <p>{product.price}</p>
                  <p>{product.rating}</p>
                  <p>{product.numReviews}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;