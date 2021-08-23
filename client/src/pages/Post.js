import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app from '../config/axiosConfig'

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("");

    useEffect(() => { //useEffect hook renders after each change
        app
            .get(`http://localhost:3001/posts/byId/${id}`)
            .then((response) => {
                setPostObject(response.data)
            })

        app
            .get(`http://localhost:3001/comments/${id}`)
            .then((response) => {
                setComments(response.data)
            })
    }, [id]); //adding [] cause 'React Hook useEffect has a missing dependency: 'id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps' warning BUT stops infinite loop

    const addComment = () => {
        app
            .post(
                "http://localhost:3001/comments",
                {
                    comment_body: newComment,
                    PostId: id,
                },
                {
                    headers: {
                        accessToken: localStorage.getItem('accessToken') //Getting local storage set in login POST
                    }
                }
            )
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data.error);
                } else {
                    const commentToAdd = { comment_body: newComment, username: response.data.username };
                    setComments([...comments, commentToAdd]);
                    setNewComment("");
                }
            });
    };

    return (
        <div className='postPage' id='individual'>
            <div className='leftSide'>
                <div className='post'>
                    <div className='title'> {postObject.title} </div>
                    <div className='post_text'> {postObject.post_text} </div>
                    <div className='username'> {postObject.username} </div>
                </div>
            </div>

            <div className='rightSide'>
                <div className='addCommentContainer'>
                    {/* event + event.target.value allows you to grab input and put them into a state in react  DO NOT NEED TO USE WITH FORMIK*/}
                    <input type='text' placeholder='Comment' autoComplete='off' value={newComment} onChange={(event) => { setNewComment(event.target.value) }} />
                    <button onClick={addComment}> </button>
                </div>

                <div className='listOfComments'>
                    {comments.map((comment, key) => {
                        return (
                            <div className='comment' key={key}>
                                Username: {comment.username}
                                Post: {comment.comment_body}

                            </div>
                        );
                    })}
                </div>

            </div>
        </div >
    )
}

export default Post
