import Navbar from '../komponen/Navbar'
import ProductCard from '../komponen/ProductCard'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{padding:20}}>
        <ProductCard name="Sneakers Z1" price="Rp 499.000" />
      </main>
    </>
  )
}

