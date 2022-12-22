import Link from 'next/link'
import {useState} from 'react'
 
interface CategoryProps {
  catProps: {id: number, url: string, name: string}[]
}
/* 
const Categories: React.FC<CategoryProps> = ({catProps}) => {

  return (
    <>
        {
          catProps.map((category) => (
            <p key={category.id}>
              &middot; <Link href={category.url}>{category.name}</Link>
            </p>
          ))
        }
    </>
  )
} */


const Categories: React.FC = () => {

  return (
    <>
      <p>
        &middot; <Link href='/blog/web-development'>Web Development</Link>
      </p>
      <p>
        &middot; <Link href='/blog/css'>CSS</Link>
      </p>
      <p>
        &middot; <Link href='/blog/aws-certification'>AWS Certification</Link>
      </p>
      <p>
        &middot; <Link href='/blog/code'>Code</Link>
      </p>
    </>
  )
}

export default Categories