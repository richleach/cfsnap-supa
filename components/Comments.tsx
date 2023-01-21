import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import {supabase} from '../components/SupabaseClient';
import moment from 'moment';
import { PencilSquareIcon, TrashIcon} from '@heroicons/react/20/solid'

const Comments: React.FC = ({User}) => {

  const [commentData, setCommentData] = useState<any>([])
  const [loading, setLoading] = useState<any>([])

  const router = useRouter()
  const currentPage = router.asPath
//console.log(currentPage)

  const deleteComment = async (id:any) => {
    
    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', id)
        if(error) throw error;
        //router.push( currentPage )
    } catch (error:any) {
      console.log(error.message)
    }
  }

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
      //console.log(data)
    }
    
      getComments();

  }, [])

  //console.log(commentData)
  return (
    <div className='text-sm place-items-left'><span className='font-semibold pb-1'>{commentData.length} Comment(s).</span>
        {
          commentData.map((d:any) => (
            <div key={d.id} className='pt-2 pb-3  border-t'>
            <><em><strong>{d.user_email?.split('@')[0]}</strong></em> &nbsp; {moment(d.inserted_at).format('MMM DD, YYYY')}
            <p key={d.id}>
              {d.user_id == User.id && 
                
                  <span  style={{display: 'inlineBlock'}}>
                    <PencilSquareIcon className="h-4 w-4 text-blue-500"  style={{float: 'right', paddingLeft: "3px"}}/>
                    <TrashIcon className="h-4 w-4 text-blue-500"  style={{float: 'right'}} onClick={() => (deleteComment(d.id))}/>
                    {d.comment} 
                  </span>} 
                  
                
            </p>
            </>
            </div>
          ))
        }
    </div>
  )
}

export default Comments