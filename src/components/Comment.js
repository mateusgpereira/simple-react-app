import React from 'react'
import PropTypes from 'prop-types'
import './Comment.css'

const Comment = ({ data }) => {
	return (
		<div className="comment--wrapper">
			<img src={data.author.avatar} alt="avatar" />
			<div className="comment--box">
				<p>
					<strong>{data.author.name}</strong>
					&nbsp;
					{data.content}
				</p>
			</div>
		</div>
	)
}

Comment.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number,
		author: PropTypes.object,
		content: PropTypes.string
	}).isRequired
}

export default Comment
