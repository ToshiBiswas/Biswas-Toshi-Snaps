import { useEffect, useState } from 'react';
import '../styles/Photo.css';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import Header2 from '../components/Header2.jsx';

const Photo = () => {
  // Expecting a single photo object
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  // State for form inputs
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");
  // State for individual input errors
  const [nameError, setNameError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  useEffect(() => {
    async function getPhoto() {
      try {
        let apiKey = sessionStorage.getItem("sessionId");
        if (!apiKey) {
          const regResponse = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/register");
          apiKey = regResponse.data.api_key;
          sessionStorage.setItem("sessionId", apiKey);
        }
        const photoId = sessionStorage.getItem("photoId");
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/?api_key=${apiKey}`
        );
        console.log("Photo response:", response);
        setPhoto(response.data);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Error fetching photo');
      }
    }

    async function getComments() {
      try {
        const apiKey = sessionStorage.getItem("sessionId");
        const photoId = sessionStorage.getItem("photoId");
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments/?api_key=${apiKey}`
        );
        console.log("Comments response:", response);
        const sortedComments = response.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setComments(sortedComments);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Error fetching comments');
      }
    }

    getPhoto();
    getComments();
  }, []);

  // Form submission handler to post a new comment.
  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (!newCommentName.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }
    if (!newCommentText.trim()) {
      setCommentError(true);
      hasError = true;
    } else {
      setCommentError(false);
    }
    if (hasError) return;
    try {
      const apiKey = sessionStorage.getItem("sessionId");
      const photoId = sessionStorage.getItem("photoId");
      const response = await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments/?api_key=${apiKey}`,
        {
          name: newCommentName,
          comment: newCommentText
        }
      );
      setComments(prev => [response.data, ...prev]);
      setNewCommentName("");
      setNewCommentText("");
      // Ensure error state is cleared on successful submission.
      setNameError(false);
      setCommentError(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!photo) return <div>Loading...</div>;

  const date = new Date(photo.timestamp);

  return (
    <div className="photo">
        <section>
        <Header2/>
            <div className="photo_section" key={photo.id}>
                <div className="photo_section_top">
                    <img
                        src={photo.photo}
                        alt={photo.photoDescription}
                        className="photo_section_top_img"
                    />
                </div>
                <div className="photo_section_bottom">
                {photo.tags && photo.tags.map((tag) => (
                    <button key={tag} className="photo_section_bottom_button">
                    {tag}
                    </button>
                ))}
                </div>
                <div className="info">
                <div className="info_top">
                    <div className="info_top_likes">
                    <img
                        src={"../../public/Icons/Like_Outline.svg"}
                        alt="like icon"
                        className="info_top_likes_img"
                    />
                    <p className="info_top_likes_ammount">{photo.likes} Likes</p>
                    </div>
                    <p className="info_top_author">Photo by {photo.photographer}</p>
                    <p className="info_date">
                    {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                </p>
                </div>

                </div>
            </div>
            
            <div className="comment">
                <div className="comment_section">
                <div className="comment_section_page">
                    <form 
                    className="comment_section_page_add"
                    id="itemForm" 
                    onSubmit={handleSubmit}
                    >
                    <label className="comment_section_page_add_name">Name</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        className={`comment_section_page_add_nameBlock ${nameError ? "error" : ""}`} 
                        value={newCommentName} 
                        onChange={(e) => setNewCommentName(e.target.value)}
                    />
                    <label className="comment_section_page_add_comment">Comment</label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        className={`comment_section_page_add_commentBlock ${commentError ? "error" : ""}`}  
                        rows="4"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                    ></textarea>
                        <div className="comment_section_page_add_button">
                            <button type="submit" className="comment_section_page_add_button_content">COMMENT</button>
                        </div>
                    </form>
                </div>
                <div className="comment_section_comments" id="comments">
                    <p className="comment_section_comments_count">{comments.length} comments</p>
                    {comments.map((comment) => (
                    <div key={comment.id} className="comment_section_comments_data">
                        <div className="comment_section_comments_data_top">
                        <p className="comment_section_comments_data_top_name">{comment.name}</p>
                        <p className="comment_section_comments_data_top_time">
                            {new Date(comment.timestamp).getDate()}/{new Date(comment.timestamp).getMonth() + 1}/{new Date(comment.timestamp).getFullYear()}
                        </p>
                        </div>
                        <p className="comment_section_comments_data_bottom">{comment.comment}</p>
                    </div>
                    ))}
                </div>
                </div>
                <Footer />
            </div>
        </section>

    </div>
  );
};

export default Photo;