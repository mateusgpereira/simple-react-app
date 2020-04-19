import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => (
	<header>
		<h1>facebook</h1>
		<span>
			My Profile
			<FontAwesomeIcon className="header-icon" icon={faUserCircle} size="lg" />
		</span>
	</header>
)
export default Header
