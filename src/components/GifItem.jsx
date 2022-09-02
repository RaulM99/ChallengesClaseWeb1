import {GetGifs} from "./GetGifs"
import PropTypes from 'prop-types'


export const GifItem = (gifs) => {

	return(
	<li>
		<a href={gifs.url} target="_blank"> {gifs.title} </a>
		<p>ID: {gifs.id}</p>

	</li>
	)
}