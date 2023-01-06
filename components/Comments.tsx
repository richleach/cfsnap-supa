import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import {supabase} from '../components/SupabaseClient';
import moment from 'moment';

const Comments: React.FC = ({User}) => {

  const [commentData, setCommentData] = useState<any>([])
  const [loading, setLoading] = useState<any>([])

  const router = useRouter()
  const currentPage = router.asPath
//console.log(currentPage)

  useEffect(() => {
  
    const getComments = async () => {
      //const { data, error } = await supabase.from('categories').select('id, url, name').eq('url', router.asPath)
      const { data, error } = await supabase
        .from('comments')
        .select('id, comment, user_email, user_id, inserted_at')
        .eq('pageurl', currentPage)
        .order('inserted_at', {ascending: false});
        
      
      setCommentData(data)
      setLoading(false)
      console.log(data)
    }
    
      getComments();

  }, [])

  console.log(commentData)
  return (
    <div className='text-sm place-items-left'><div className='font-semibold border-b pb-1'>{commentData.length} Comment(s).</div>
        {
          commentData.map((d:any) => (
            <div key={d.id} className='pt-2 pb-3'>
            <><em><strong>{d.user_email?.split('@')[0]}</strong></em> &nbsp; {moment(d.inserted_at).format('MMM DD, YYYY')}
            <p key={d.id}>
              {d.user_id == User.id && <span>Delete / Edit</span>} {d.comment} </p>
            </>
            </div>
          ))
        }
    </div>
  )
}

export default Comments