import { Link } from "react-router-dom"
import styled from "styled-components"



const Container = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 10%;
`

const Section = styled.div`


`
const ProductTitle = styled.h1`
  text-align: center;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    background-color:#8ed40b;
    width: 5%;
    height: 0.5vh;
    top: 110%;
    left: 47%; }
`

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(4 , 315px);
  gap: 10px;
  margin-top: 40px;
  position: relative;
`

const CategoriesImge = styled.div`
  width: 100%;
  height: 60vh;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  
`
const Button = styled.button`
  position: absolute;
  top: 60%;
  margin-left: 7%;
  padding: 10px 15px ;
  border: none;
  background-color: #000000;
  color: white;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
`
const DivButton = styled.div`

`

const ProductSection = () => {
  return (
    <Container>
      <Section>
    <ProductTitle>Our Products</ProductTitle>
      </Section>
      <Categories>
  <DivButton>
  <CategoriesImge style={{ backgroundImage: `url(https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`}} />
<Link to='/Clothes'><Button>See More</Button></Link>
  </DivButton>
    
   <DivButton>
   <CategoriesImge style={{ backgroundImage: `url(https://i.pinimg.com/564x/be/55/a9/be55a90d7557a60b268c9d4af4c2f794.jpg)`}} />
   <Link to='/Watch'><Button>See More</Button></Link>
   </DivButton>
   <DivButton>
   <CategoriesImge style={{ backgroundImage: `url(https://i.pinimg.com/564x/a5/61/ad/a561adbbf3cdc5bcf450e51bc3cd5d3f.jpg)`}} />
   <Link to='/Furniture'><Button>See More</Button></Link>
   </DivButton>
   <DivButton>
   <CategoriesImge style={{ backgroundImage: `url(https://i.pinimg.com/564x/c3/c7/84/c3c7844c9e8b1990753809a5f8c99943.jpg)`}} />
   <Link to='/Shose'><Button>See More</Button></Link>
   </DivButton>
      
  
      </Categories>
     
      </Container>
  )
}

export default ProductSection

