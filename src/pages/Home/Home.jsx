// import { Link } from "react-router-dom"

import CategoriaProduto from "../../components/CategoriaProduto/CategoriaProduto"
import './home.css'
function Home() {
    const CATEGORIAS = [
        {
            id: 1,
            texto: 'Ofertas',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fcategory_ofertas_2x.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 2,
            texto: 'Cervejas',
            imagem: ''
        },
        {
            id: 3,
            texto: 'Vinhos',
            imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Froot-categories%2Fvinhos2.png%3Ffm%3Dpng%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D48%26h%3D48%26dpr%3D2%26fm%3Dpng&w=256&q=75'
        },
        {
            id: 4,
            texto: 'Petiscos',
            imagem: ''
        },
        {
            id: 5,
            texto: 'Refrigerantes',
            imagem: ''
        },
        {
            id: 6,
            texto: 'Chopps',
            imagem: ''
        },
    ]
    
    return (
        <>
            <div className="content">
                <h1>Home</h1>                

                <div className="lista-categorias">
                    {CATEGORIAS.map(categoria => 
                        <CategoriaProduto key={categoria.id} texto={categoria.texto} imagem={categoria.imagem}/> )}
                </div>
             
                {/* <Link to='/bicicletas'>Bicicletas</Link> */}
            </div>
        </>
    )
}

export default Home

