import { supabase } from "../components/SupabaseClient"
import {useState} from 'react'

export default async function Page() {
    const { data: categories } = await supabase.from('categories').select()
    const [cat, setCat] = useState([])
    JSON.stringify(categories, null, 2)

    return <pre></pre>
  }