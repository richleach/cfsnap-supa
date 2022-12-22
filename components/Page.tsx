import {supabase} from './SupabaseClient'

function Page({ categories = []}){
    console.log({categories});
    return (
        categories.map(cat => <p>{cat}</p>)
    )
  }

export default Page

export const getStaticProps = async () => {
  const { data: categories } = await supabase.from('categories').select('*')
  return {
    props: {
      categories
    }
  };
}