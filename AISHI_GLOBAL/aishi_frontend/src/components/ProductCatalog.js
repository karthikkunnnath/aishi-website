
const products = [
  { id: 'HMD-01', name: 'Hollow Metal Fire Door', category: 'Doors', specs: '2-Hour Fire Rated' },
  { id: 'SST-500', name: 'SS 304 Water Tank', category: 'Tanks', specs: '500L - 10,000L Range' },
  { id: 'MP-05', name: 'Modular Cleanroom Partition', category: 'Partitions', specs: '50mm G.I / S.S' },
  { id: 'ALC-09', name: 'Aluminium Linear Ceiling', category: 'Ceilings', specs: 'Anti-Static Coating' },
];

const ProductCatalog = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 underline decoration-orange-500">
          Industrial Product Division
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="h-40 bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-400">
                [Product Image: {product.id}]
              </div>
              <p className="text-xs text-orange-600 font-bold uppercase">{product.category}</p>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.specs}</p>
              <button className="w-full bg-slate-800 text-white py-2 rounded text-sm hover:bg-orange-600 transition">
                Add to Quote Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;

