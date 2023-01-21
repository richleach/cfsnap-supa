
import Link from 'next/link'
import {useState} from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import moment from 'moment';
import {supabase} from '../components/SupabaseClient';

const CommentsForm: React.FC = (session) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter()
  const currentPage = router.asPath

  const initialState = {
    comment: '',
    user: ''
  }
//console.log({user})
  const [formData, setFormData] = useState(initialState);

  const onInputChange = (e:any) => {
      setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handlePostSubmission = async () => {

    const naughtyList = ['shit','piss','fuck','cunt','bitch','asshole','whore'];

    if(formData.comment.length < 1){
      setErrorMessage(`The comment field needs at least a few characters; please enter something memorable and try again.`);
        return;
    }

    for(let i=0; i < naughtyList.length; i++){
      if(formData.comment.includes(naughtyList[i]) == true){
        setErrorMessage(`Your comment contains a naughty word ("${naughtyList[i]}"). Please remedy your language and try again.`);
        return;
      }
    }
//console.log(`User.id: ${user?.id}`)
console.log(session)
    const { data, error } = await supabaseClient
    .from('comments')
    .insert([
      {
        pageurl: currentPage,
        comment: formData.comment,
        user_email: user?.email?.toLowerCase(),
        user_id: user?.id
    }
    ],{ returning: "minimal" })

    if(error){console.log(error)}

    setShowSuccessMessage(true)
    setFormData(initialState)
    setTimeout(() => {
      //setShowSuccessMessage(false);
      router.reload()
    }, 5000);
  }

  return (
    
      <div className="w-full p-8 pb-8 mb-8 bg-white rounded-lg shadow-lg">
        <h3 className="pb-2 mb-8 text-xl font-semibold border-b">Leave a comment....</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          
          <textarea 
              value={formData.comment} 
              onChange={onInputChange} 
              className="w-full p-4 text-gray-700 bg-gray-100 rounded-lg outline-none h-30 focus:ring-2 focus:ring-gray-200" 
              name="comment" 
              placeholder="Comment" />
        </div>

        {/*  Your username will be displayed as {user?.email?.split('@')[0]} */}
        
        {errorMessage !== null  && <span className="text-xs text-red-500">{errorMessage}</span>}
        {showSuccessMessage && <span className="text-green-500">Comment submitted for approval, give it a minute....</span>}{/*  */}
        <div className="mt-8">
          <button 
            type="button" 
            onClick={handlePostSubmission} 
            className="inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 bg-pink-600 rounded-full cursor-pointer ease hover:bg-indigo-900">
                Post Comment
          </button>
        </div>
      </div>
  )
}

export default CommentsForm

//testing commit