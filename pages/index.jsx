import fs from 'fs/promises';
import path from 'path';
import MainHeader from '../components/layout/main-header';


function HomePage(props){
  const { products } = props;
  return (
     <><MainHeader navigation={products} /></>
  )
}

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'DummyBackEnd.json' );
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if(!data){
    return {
      redirect: {
        destination: '/no-data'
      }
    }

  }

  if(data.products.length === 0 ) {

    return { notFound: true };
  }
  return {
    props: {
      products: data.products
    },
    revalidate: 10
  }
}

export default HomePage;