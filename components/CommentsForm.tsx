import Link from 'next/link'
import {useState} from 'react'

const CommentsForm: React.FC = () => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({comment: ''});

  const handlePostSubmission = () => {
    return true
  }

  const onInputChange = (e:any) => {
      setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
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
        
        {/* {error && <p className="text-xs text-red-500">All fields are required.</p>}
        {showErrorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
        {showSuccessMessage && <span className="text-xs text-green-500">Comment submitted for approval, give it a minute....</span>} */}
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