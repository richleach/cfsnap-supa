import {useState} from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router';
import moment from 'moment';
import {supabase} from '../components/SupabaseClient';

type CommentsProps = {
    comment: string,
    id: number
  }
  
const EditCommentsForm = (props:any) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter()
  const currentPage = router.asPath

  const initialState = {
    comment: props.comment
  }
//console.log({user})
  const [formData, setFormData] = useState(props.comment);

  const onInputChange = (e:any) => {
      setFormData((prevState:any) => ({
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
//console.log(session)
    const { data, error } = await supabaseClient
    .from('comments')
    .update([
        {
        comment: formData.comment
        }
    ])
    .eq("id", props.id)

    if(error){console.log(error)}

    setShowSuccessMessage(true)
    setFormData(initialState)
    setTimeout(() => {
      //setShowSuccessMessage(false);
      router.reload()
    }, 5000);
  }
//console.log(props.comment)
  return (
    
      <div className="w-full p-8 pb-8 mb-8 bg-white rounded-lg shadow-lg">
        <p className="pb-2 mb-8 text-xl font-semibold border-b">Edit your comment....</p>
        <div className="grid grid-cols-1 gap-4 mb-4">
          
          <textarea 
              defaultValue={props.comment}
              onChange={onInputChange} 
              className="w-full p-4 text-gray-700 bg-gray-100 rounded-lg outline-none h-30 focus:ring-2 focus:ring-gray-200" 
              name="comment"  />
        </div>

        {/*  Your username will be displayed as {user?.email?.split('@')[0]} */}
        
        {errorMessage !== null  && <span className="text-xs text-red-500">{errorMessage}</span>}
        {showSuccessMessage && <span className="text-green-500">Comment submitted for approval, give it a minute....</span>}{/*  */}
        <div className="mt-8">
          <button 
            type="button" 
            onClick={handlePostSubmission} 
            className="inline-block px-7 py-2 text-md font-medium text-white transition duration-500 bg-pink-600 rounded-full cursor-pointer ease hover:bg-indigo-900">
                Edit Comment
          </button>
        </div>
      </div>
  )
}

export default EditCommentsForm