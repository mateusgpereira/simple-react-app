import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [
				{
					id: 1,
					author: {
						name: 'Rael da Rima',
						avatar: '/img/rael.jpg'
					},
					date: '04 Jun 2019',
					content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
					comments: [
						{
							id: 1,
							author: {
								name: 'Diego Fernandes',
								avatar: '/img/diego.jpg'
							},
							content: 'Conteúdo do comentário'
						}
					]
				},
				{
					id: 2,
					author: {
						name: 'Mateus Pereira',
						avatar: '/img/mateus.jpg'
					},
					date: '19 Apr 2020',
					content: 'Estoramo no Bootcamp de js',
					comments: [
						{
							id: 1,
							author: {
								name: 'Diego Fernandes',
								avatar: '/img/diego.jpg'
							},
							content: 'É us guri'
						}
					]
				}
			]
		}
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.posts.map((post) => (
						<Post key={post.id} data={post} />
					))}
				</ul>
			</div>
		)
	}
}

export default PostList
