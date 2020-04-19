import React, { Component } from 'react'
import Post from './Post'
import './PostList.css'

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
				},
				{
					id: 3,
					author: {
						name: 'Mateus Pereira',
						avatar: '/img/mateus.jpg'
					},
					date: '10 Apr 2020',
					content: 'Os cara são brabo no React mesmo',
					comments: [
						{
							id: 1,
							author: {
								name: 'Diego Fernandes',
								avatar: '/img/diego.jpg'
							},
							content: 'Enjoado demais'
						}
					]
				},
				{
					id: 4,
					author: {
						name: 'Mateus Pereira',
						avatar: '/img/mateus.jpg'
					},
					date: '10 Apr 2020',
					content:
						'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
					comments: [
						{
							id: 1,
							author: {
								name: 'Diego Fernandes',
								avatar: '/img/diego.jpg'
							},
							content: 'Enjoado demais'
						}
					]
				}
			]
		}
	}

	render() {
		return (
			<div className="container">
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
