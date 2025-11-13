export default function ProductCard({ name = 'Product', price = 'Rp 0', image }) {
  return (
    <div style={{border:'1px solid #ddd', padding:12, width:200}}>
      <img src="white jacket.jpeg" alt="jacket" style={{ width: '100%', borderRadius: '8px' }} />
      <p>{price}</p>
    </div>
  )
}
