import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ data }) => {
	return (
		<div>
			<img src={data.author.avatar} alt="avatar" />
			<p>
				<strong>{data.author.name}</strong>

				{data.content}
			</p>
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
