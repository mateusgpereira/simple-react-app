import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import './Post.css'

const Post = ({ data }) => {
	return (
		<div className="box--post">
			<div>
				<div className="post--header">
					<img src={data.author.avatar} alt="avatar" />
					<p>
						<span className="user">{data.author.name}</span>
						<br />
						<span className="date">{data.date}</span>
					</p>
				</div>
				<p>{data.content}</p>
			</div>
			<hr className="divider" />
			<div>
				{data.comments.map((comment) => (
					<Comment key={comment.id} data={comment} />
				))}
			</div>
		</div>
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
