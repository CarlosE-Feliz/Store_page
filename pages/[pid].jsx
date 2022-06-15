import fs from 'fs/promises';
import path from 'path';


function Categories(props) {
  const { loadedItem } = props;
  return (
      <>
          <h1>{loadedItem.title}</h1>
          <p>{loadedItem.description}</p>
      </>
  )

  
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const filePath = path.join(process.cwd(), "data", "DummyBackEnd.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
  
    const product = data.products.find(product => product.id === productId);
  
    return {
        props: {
            loadedItem: product,
        },
    };
  }
  export async function getStaticPaths(){
      return{
          paths: [
              {
                  params: {pid: 'p1'}
              },
              {
                  params: {pid: 'p2'}
              },
              {
                  params: {pid: 'p3'}
              }
          ],
          fallback: false
      };
  }

export default Categories;

