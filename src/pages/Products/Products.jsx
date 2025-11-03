
import ProductCard from '../../components/ProductCard/ProductCard'
import { Box } from '@mui/material'

export const Products = ({products}) => {
  

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
        products.map((product) => < ProductCard key={product.id} product={product}/>)
      }
      </Box>
    </Box>
  )
}