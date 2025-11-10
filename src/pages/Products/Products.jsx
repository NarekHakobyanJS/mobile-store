
import { useContext } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Box } from '@mui/material'
import { productContext } from '../../app/provider/provider'

export const Products = () => {
  
  const {products, addToCart} = useContext(productContext)

  return (
    <Box>

      <Box sx={{
        display : 'flex',
        justifyContent : 'space-between', 
        alignItems : 'center',
        flexWrap : 'wrap',
        gap : '30px'
        }}>
      {
        products.map((product) => < ProductCard 
        key={product.id} 
        product={product}
        addToCart={addToCart}
        />)
      }
      </Box>
    </Box>
  )
}