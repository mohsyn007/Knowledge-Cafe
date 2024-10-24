import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtag}=blog;
    return (
        <div>
           
           <img className='w-full mb-8' src={cover} alt={`cover picture of the ${title}`} />
           <div className='flex justify-between mb-4'>
            <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>

            </div>
            <div>
                <span>{reading_time} mins read</span>
                <button onClick={handleAddToBookmark} className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button>

            </div>
           </div>
           <h3 className='text-4xl'>{title}</h3>
           <p>
            {
                hashtag.map((hash,idx) => <span key={idx}><a href=''>#{hash} </a> </span>)
            }
    
           </p>
        </div>
    );
};



Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;