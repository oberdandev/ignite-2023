/* eslint-disable react/prop-types */
function Post (props) {
  return (
    <div>
      <h1>{props.author}</h1>
      <p>{props.content}</p>
    </div>
  )
}

export default Post;
export {Post};