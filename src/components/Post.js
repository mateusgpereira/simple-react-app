import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

const Post = ({ data }) => {
	return (
		<>
			<div>
				<img src={data.author.avatar} alt="avatar" />
				<p>{data.author.name}</p>
				<p>{data.date}</p>
			</div>
			<div>
				<p>{data.content}</p>
			</div>
			<div>
				{data.comments.map((comment) => (
					<Comment key={comment.id} data={comment} />
				))}
			</div>
		</>
	)
}

Post.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		author: PropTypes.object,
		date: PropTypes.string,
		content: PropTypes.string,
		comments: PropTypes.array
	}).isRequired
}

export default Post
