import HeaderAdmin from '../../HeaderAdmin'
import SideBar from '../../Dashboard/Init/SideBar'
import Layout from '@/Layout'
const AllProductsToEdit = () => {
  return (
    <Layout>  
      <HeaderAdmin/>
      <main className="grid w-full h-full grid-cols-[300px,1fr]">
        <SideBar/>
        <section className="grid  w-full h-full  ">

        </section>
      </main>
    </Layout>
  )
}

export default AllProductsToEdit